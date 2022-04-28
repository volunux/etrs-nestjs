import { forwardRef } from '@nestjs/common';
import Query from './Query';
import { EntityQueryConfig } from '../../query/util/EntityQueryConfig';
import { QueryTemplate } from '../../query/util/QueryTemplate';
import { EntityManager } from 'typeorm';

interface CrudRepository<T> {

  findAll(eqp: EntityQueryConfig | null, userId?: number): Promise<T[]>;
  findOne(id: string | number, userId?: number): Promise<T | null>;
  remove(id: string | number, userId?: number): Promise<T | null>;
  update(id: string | number, entry: T, userId?: number): Promise<T | null>;
  save(entry: T): Promise<T | null>;
  insert(entry: T): Promise<boolean>;
  persist(entry: T): Promise<T | null>;
  existsOne(id: string | number): Promise<boolean>;
  getQueryTemplate(): QueryTemplate<T>;
  getClient(): QueryClient;
  setClient(client: QueryClient | null): void;
  getOrmClient(): QueryClient;
  getTransactionManager(): EntityManager | null;
  setTransactionManager(manager: EntityManager | null): void;
}

export default interface QueryClient extends Query {

  beginTransaction(facade: CrudRepository<any>[], context?: any): Promise<void>;
  endTransaction(facade?: CrudRepository<any>): Promise<void>;
  commit(facade?: CrudRepository<any>): Promise<void>;
  rollback(facade?: CrudRepository<any>): Promise<void>;
}