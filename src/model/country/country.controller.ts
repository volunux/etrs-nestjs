import { Controller, Get, Post, Body, Put, Patch, Param, Delete, Res, HttpCode, Header, HttpStatus, ParseIntPipe, UsePipes } from '@nestjs/common';
import { Response } from 'express';
import { CountryServiceImpl } from './service/country.service.impl';
import { SimplePipe } from '../../helper/pipe/SimplePipe';
import { PlainToCountryPipe } from './pipe/plain-to-country.pipe';
import { Country } from './entities/country.entity';
import Joi from 'joi';
import ConfigurationProperties from '../../config/configuration.properties';
import { getRepository, Connection } from 'typeorm';
import { UserStatus } from '../user-status/entities/user-status.entity';

@Controller('country')
export class CountryController {
  constructor(private readonly service: CountryServiceImpl , private readonly config: ConfigurationProperties, private readonly connection: Connection) {}

  private title: string = "Country Controller";

  @Put()
  public updateCountry(): void {

    console.log('Update country');
  }

  @Get()
  public async findAll(): Promise<Country[]> {
    return await this.service.findAll(null);
  }


  @Get(':id/:name')
  public async findOne(@Param('id' , new ParseIntPipe({errorHttpStatusCode : HttpStatus.NOT_ACCEPTABLE})) id: number , @Param('name' , SimplePipe) name: string): Promise<Country> {
    let country: Country = await this.service.findOne('2');
    console.log(country);

    let result = await getRepository(UserStatus).find();
    console.log(result);

    let result1 = await this.connection.createQueryBuilder(Country , 'ct').select([`ct`]).execute();

    console.log(result1);


    return country;
  }

  @Post(':id')
  public async save(@Body(new PlainToCountryPipe()) country: Country) {

    console.log(country);

  }

}
