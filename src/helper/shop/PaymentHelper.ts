import axios , { AxiosResponse , AxiosRequestConfig } from 'axios';
import winston , { Logger } from 'winston';
import ConfigurationProperties from '../../config/ConfigurationProperties';
import SimpleLogger from '../../util/other/Logger';
import { User } from '../../model/user/entities/user.entity';
import { Order } from '../../model/order/entities/order.entity';
import { TransactionException } from '../../model/error/TransactionException';
import { CheckoutService } from '../../model/checkout/service/checkout.service';
import { CheckoutServiceImpl } from '../../model/checkout/service/checkout.service.impl';

export class PaymentHelper {

	private readonly checkoutService : CheckoutService = new CheckoutServiceImpl();
	private readonly eProps : ConfigurationProperties = ConfigurationProperties.getInstance();
	private readonly logger : Logger = SimpleLogger.getLogger().child({'component' : PaymentHelper.name});

	public async initializeTransaction(order : Order) : Promise<{ [key : string] : any }> { 

		let url : string = 'https://api.paystack.co/transaction/initialize';
		let user : User | null = await this.checkoutService.retrieveUserDetails(order.getUserId());
		let finalAmount : number = order.getAmount() * 100;
		let response : AxiosResponse<any> = {} as any;

		let options : { [key : string] : any } = {
			'Authorization' : 'Bearer ' + this.eProps.getPaystackKey() ,
			'Content-Type': 'application/json' ,
			'Cache-Control': 'no-cache' };

		let data : { [key : string] : any } = {

			'email' : user!.getEmailAddress() ,
			'amount' : finalAmount ,
			'currency' : 'NGN' ,
			'metadata' : {
				'phone_number' : order.getPhoneNumber() }
		};

		let requestConfig : AxiosRequestConfig = { 'method': 'POST' , 'url' : url , 'data' : data , 'headers' : options };

		for (let i : number = 0; i < 4; i++) {
			try { response = await axios(requestConfig);
				break; }
			catch(err : any) {
				if (i === 3) { throw new TransactionException(); } } }
		return response.data;
	}

	public async verifyTransaction(transaction_reference : string) : Promise<any> {

		let url : string = 'https://api.paystack.co/transaction/verify/' + encodeURIComponent(transaction_reference);
		let options : { [key : string] : any } = {
			'Authorization' : 'Bearer ' + this.eProps.getPaystackKey(),
			'Content-Type': 'application/json',
			'Cache-Control': 'no-cache'	};

		let response : AxiosResponse<any> = {} as any;
		let requestConfig : AxiosRequestConfig = { 'method': 'GET' , 'url' : url , 'headers' : options };

		for (let i : number = 0; i < 4; i++) {
			try { response = await axios(requestConfig);
				break; }
			catch(err : any) {
				if (i === 3) { throw new TransactionException(); } } }
		return response.data.data;
	}

}