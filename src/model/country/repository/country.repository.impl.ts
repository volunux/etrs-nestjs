import { Injectable } from "@nestjs/common";
import { AbbreviationEntitySearch } from "../../../helper/search/impl/AbbreviationEntitySearch";
import { Newable } from "../../interface/Newable";
import { VxEntityOneRepositoryImpl } from "../../../repository/abstract/VxEntityOneRepositoryImpl";
import { VxRepository } from "../../../util/decorators/VxRepository";
import { Country } from "../entities/country.entity";
import { CountryRepository } from "./country.repository";

@Injectable()
@VxRepository()
export class CountryRepositoryImpl extends VxEntityOneRepositoryImpl<Country> implements CountryRepository {

  protected readonly search: AbbreviationEntitySearch<Country> = AbbreviationEntitySearch.getInstance({});
  protected readonly VxEntity: Newable<Country> = Country;

}