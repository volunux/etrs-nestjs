import { Injectable , Inject } from "@nestjs/common";
import { AbstractBaseServiceImpl } from "../../../service/abstract/AbstractBaseServiceImpl";
import { Country } from "../entities/country.entity";
import { CountryRepository } from "../repository/country.repository";
import { CountryRepositoryImpl } from "../repository/country.repository.impl";

@Injectable()
export class CountryServiceImpl extends AbstractBaseServiceImpl<Country> {

  @Inject()
  protected readonly repository : CountryRepositoryImpl;
}
