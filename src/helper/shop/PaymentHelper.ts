import axios , { AxiosResponse , AxiosRequestConfig } from 'axios';
import winston , { Logger } from 'winston';
import ConfigurationProperties from '../../config/ConfigurationProperties';
import SimpleLogger from '../../util/other/Logger';
import { User } from '../../model/user/entities/user.entity';
import { Order } from '../../model/order/entities/order.entity';
import { TransactionException } from '../../model/error/TransactionException';

export class PaymentHelper {

	private readonly eProps : ConfigurationProperties = ConfigurationProperties.getInstance();
	private readonly logger : Logger = SimpleLogger.getLogger().child({'component' : PaymentHelper.name});

	public async initializeTransaction(order : Order) : Promise<{ [key : string] : any }> {

		return {};
	}

	public async verifyTransaction(transaction_reference : string) : Promise<any> {

		return {};
	}

}