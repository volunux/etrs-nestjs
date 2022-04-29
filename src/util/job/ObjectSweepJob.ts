import aws , { AWSError } from 'aws-sdk';
import cron from 'node-schedule';
import FileConfigurerImpl from '../../util/aws/s3/FileConfigurerImpl';
import SimpleLogger from '../../util/other/Logger';
import { Logger , Profiler } from 'winston';
import { JobRunner } from './JobRunner';
import { ObjectSweep } from '../../model/object-sweep/entities/object-sweep.entity';

aws.config.update(FileConfigurerImpl.getInstance().getConfiguration());

export class ObjectSweepJob implements JobRunner {

  private static instance : ObjectSweepJob;
  private readonly logger : Logger = SimpleLogger.getLogger().child({'component' : ObjectSweepJob.name});
  private s3 : aws.S3 = new aws.S3();

  private constructor() { }

  public static getInstance() : ObjectSweepJob { if (!ObjectSweepJob.instance) { ObjectSweepJob.instance = new ObjectSweepJob(); }
    return ObjectSweepJob.instance; }

  public async execute() : Promise<void> {

  }

}