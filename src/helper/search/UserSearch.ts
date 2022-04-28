import { SelectQueryBuilder , Like } from 'typeorm';
import { AbstractStatusEntitySearch } from './abstract/AbstractStatusEntitySearch';
import { EntityQueryConfig } from '../../query/util/EntityQueryConfig';
import { User } from '../../model/user/entities/user.entity';

export class UserSearch extends AbstractStatusEntitySearch<any> {

  public static getInstance() : UserSearch { return new UserSearch(); }

  public emailAddress(qb : SelectQueryBuilder<User> , eqc : EntityQueryConfig) : void { let emailAddress : string = (<string>eqc.getParameter('search'));
    emailAddress = emailAddress.toLowerCase();
    qb.where({'email_address' : Like(`%${emailAddress}%`)});}

  public matriculationNumber(qb : SelectQueryBuilder<User> , eqc : EntityQueryConfig) : void { let matriculationNumber : string = (<string>eqc.getParameter('search'));
    matriculationNumber = matriculationNumber.toUpperCase();
    qb.where({'matriculation_number' : Like(`%${matriculationNumber}%`)});}
}