import { CrudServiceX } from "../../../service/abstract/CrudServiceX";
import { Country } from "../entities/country.entity";

export interface CountryService extends CrudServiceX<Country> { }
