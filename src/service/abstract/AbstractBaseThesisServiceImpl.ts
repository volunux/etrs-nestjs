import { Logger } from 'winston';
import ConfigurationProperties from '../../config/ConfigurationProperties';
import QueryClient from '../../query/util/QueryClient';
import S3ObjectChange from '../../helper/file/S3ObjectChange';
import SimpleLogger from '../../util/other/Logger';
import { AbstractBaseServiceImpl } from './AbstractBaseServiceImpl';
import { BaseThesisService } from '../abstract/BaseThesisService';
import { CrudRepository } from '../../repository/generic/Repository';
import { BaseThesisRepository } from '../../repository/generic/BaseThesisRepository';
import { ThesisAttachment } from '../../model/ThesisAttachment';
import { Thesis } from '../../model/thesis/entities/thesis.entity';
import { ObjectSweep } from '../../model/object-sweep/entities/object-sweep.entity';

export abstract class AbstractBaseThesisServiceImpl {

  protected abstract repository: BaseThesisRepository;
  private readonly eProps: ConfigurationProperties = ConfigurationProperties.getInstance();
  private readonly logger: Logger = SimpleLogger.getLogger().child({ 'component': this.constructor.name })

  public async entryDownload(id: number, userId?: number): Promise<Thesis | null> { return null; }

  public async getEntryId(id: number): Promise<number> { return 0; }

  public async entryExists(id: string, userId?: number): Promise<Thesis | null> { return this.repository.entryExists(id, userId); }

  public async findOneById(id: number): Promise<Thesis | null> { return this.repository.findOneById(id); }

  public async update(id: string, entry: Thesis, userId?: number): Promise<Thesis | null> {
    entry.deleteTransientProps();
    return this.repository.update(id, entry, userId);
  }

  public async existsThesisObject(id: string, entityName: string): Promise<ThesisAttachment | null> { return this.repository.existsThesisObject(id, entityName); }

  public async saveThesisObject(entityName: string, entry: ThesisAttachment): Promise<ThesisAttachment | null> { return this.repository.saveThesisObject(entry, entityName); }

  public async updateThesisObject(id: string, slug: string, entityName: string, entry: ThesisAttachment | null, bucketName: string): Promise<ThesisAttachment | null> {
    return null;
  }

  public async deleteThesisObjectByKey(key: string, entityName: string, bucketName: string): Promise<ThesisAttachment | null> {
    return null;
  }

  public async updateOneContent(id: string, userId?: number): Promise<Thesis | null> { return this.repository.updateOneContent(id, userId); }

  public async updateContent(id: string, entry: Thesis, userId?: number): Promise<Thesis | null> { return this.repository.updateContent(id, entry, userId); }

  public async setThesisStatusPending(id: string): Promise<boolean> { return this.repository.setThesisStatusPending(id); }

  public async deleteMany(entries: string): Promise<Thesis[]> {
    return [];
  }

}
