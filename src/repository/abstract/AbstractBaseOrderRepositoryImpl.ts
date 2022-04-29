import { getRepository, SelectQueryBuilder, UpdateResult, Like } from 'typeorm';
import { AbstractBaseOrmRepositoryImpl } from '../abstract/AbstractBaseOrmRepositoryImpl';
import { OrderOrmSearch } from '../../helper/search/OrderOrmSearch';
import { EntityQueryConfig } from '../../query/util/EntityQueryConfig';
import { Newable } from '../../model/interface/Newable';
import { OrderItem } from '../../model/OrderItem';
import { User } from '../../model/user/entities/user.entity';
import { IntUser } from '../../model/abstract/VxEntity';
import { VxRepository } from '../../util/decorators/VxRepository';

@VxRepository()
export class AbstractBaseOrderRepositoryImpl {}