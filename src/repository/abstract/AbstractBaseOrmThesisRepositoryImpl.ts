import { DeleteResult, getRepository, In, SelectQueryBuilder, UpdateResult, InsertResult, DeleteQueryBuilder, EntityManager } from 'typeorm';
import { AbstractBaseOrmRepositoryImpl } from '../abstract/AbstractBaseOrmRepositoryImpl';
import { ThesisEntitySearch } from '../../helper/search/impl/ThesisEntitySearch';
import { EntityQueryConfig } from '../../query/util/EntityQueryConfig';
import { AbstractBaseThesisQuery } from '../../query/interface/AbstractBaseThesisQuery';
import { DynamicQuery } from '../../query/util/DynamicQuery';
import { ServiceHelper } from '../../util/ServiceHelper';
import { Newable } from '../../model/interface/Newable';
import { Thesis } from '../../model/thesis/entities/thesis.entity';
import { ThesisAttachment } from '../../model/ThesisAttachment';
import { ThesisCoverImage } from '../../model/ThesisCoverImage';
import { ThesisDocument } from '../../model/ThesisDocument';
import { VxRepository } from '../../util/decorators/VxRepository';

@VxRepository()
export abstract class AbstractBaseOrmThesisRepositoryImpl  {

  protected readonly search: ThesisEntitySearch = ThesisEntitySearch.getInstance();
  protected abstract query: AbstractBaseThesisQuery<Thesis>;
  protected readonly VxEntity: Newable<Thesis> = Thesis;

  public async entryDownload(id: number, userId?: number): Promise<Thesis | null> {
    let entry: Thesis | undefined = await getRepository(Thesis).createQueryBuilder(`vx`).innerJoinAndSelect(`vx.document`, `td`).select([`vx._id`, `td.key`]).where({ '_id': id }).getOne();
    if (entry === undefined) return null;
    return entry;
  }

  public async getEntryId(id: number): Promise<number> {
    let entry: Thesis | undefined = await getRepository(Thesis).findOne(id, { 'select': ['_id'] } as any);
    if (entry === undefined) return 0;
    return entry.getId();
  }

  public async findOneById(id: number): Promise<Thesis | null> {
    let qb: SelectQueryBuilder<Thesis> = await this.findOneInternal(id);
    let entry: Thesis | undefined = await qb.where({ '_id': id }).limit(1).getOne();
    if (entry === undefined) return null;
    return entry;
  }

  public async findOne(id: string | number, userId?: number): Promise<Thesis | null> {
    return null;
  }

  protected async findOneInternal(id: string | number, userId?: number): Promise<any> {
    return null;
  }

  public async selectOnlyNameAndId(): Promise<Thesis[]> { return await getRepository(Thesis).createQueryBuilder(`vx`).select([`vx._id`, `vx.title`]).getMany(); }

  public async existsOne(id: string | number): Promise<boolean> {
    let entry: Thesis | undefined;
    entry = await getRepository(Thesis).createQueryBuilder(`vx`).where({ 'slug': id }).select([`vx._id`]).limit(1).getOne();
    if (entry === undefined) return false;
    return true;
  }

  public async findAll(q: EntityQueryConfig): Promise<Thesis[]> {
    return [];
  }

  public async updateOne(id: string | number, userId?: number): Promise<Thesis | null> {
    return null;
  }

  public async update(id: string | number, entry: Thesis, userId?: number): Promise<Thesis | null> {
    return null;
  }

  public async deleteOne(id: string | number, userId?: number): Promise<Thesis | null> {
    return null;
  }

  public async remove(id: string | number, userId?: number): Promise<Thesis | null> {
    return null;
  }

  public async deleteMany(entries: string | string[]): Promise<Thesis[]> {
    let result: DeleteResult = await getRepository(Thesis).createQueryBuilder(`vx`).delete().whereInIds(entries).returning(`_id`).execute();
    return ServiceHelper.rowsToObjectMapper<Thesis>(<any>result.raw, Thesis);
  }

  public async deleteAll(): Promise<Thesis[]> { return await getRepository(Thesis).createQueryBuilder(`vx`).where({}).select([`vx._id`]).limit(1).getMany(); }

  public async findAndDeleteAll(): Promise<Thesis[]> {
    let result: DeleteResult = await getRepository(Thesis).createQueryBuilder(`vx`).delete().returning(`vx._id`).execute();
    return ServiceHelper.rowsToObjectMapper<Thesis>(<any>result.raw, Thesis);
  }

  public async findAllSubmission(q: EntityQueryConfig, userId?: number): Promise<Thesis[]> {
    return [];
  }

  public async entryExists(id: string, userId?: number): Promise<Thesis | null> {
    return null;
  }

  public async updateOneContent(id: string, userId?: number): Promise<Thesis | null> {
    return null;
  }

  public async updateContent(id: string, entry: Thesis, userId?: number): Promise<Thesis | null> {
    return null;
  }

  public async setThesisStatusPending(id: string): Promise<boolean> {
    return false;
  }

  public async findManyObject(entries: string | string[], entityName: string): Promise<ThesisAttachment[]> {
    return [];
  }

  public async existsThesisObject(id: number, entityName: string): Promise<ThesisAttachment | null> {
    return null;
  }

  public async updateThesisObject(id: string | number, entityName: string): Promise<ThesisAttachment | null> { return null; }

  public async saveThesisObject(entry: ThesisAttachment, entityName: string): Promise<ThesisAttachment | null> {
    return null;
  }

  public async deleteThesisObject(id: number, entityName: string): Promise<ThesisAttachment | null> {
    return null;
  }

  public async deleteThesisObjectByKey(key: string, entityName: string): Promise<ThesisAttachment | null> {
    return null;
  }

  public async updateStatus(slug: string, status: string): Promise<boolean> {
    return null;
  }

  protected async findAllInternal(q: EntityQueryConfig, userId?: number, isSubmission?: boolean): Promise<any> {
    return null;
  }

}