import { CrudRepositoryX } from "../../../repository/generic/CrudRepositoryX";
import { Country } from "../entities/country.entity";

export interface CountryRepository extends CrudRepositoryX<Country> { } 