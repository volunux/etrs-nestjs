import { Injectable } from '@nestjs/common';
import ConfigurationProperties from '../config/configuration.properties';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { Country } from '../model/country/entities/country.entity';
import { User } from '../model/user/entities/user.entity';
import { UserSignature } from '../model/UserSignature';
import { UserProfilePhoto } from '../model/UserProfilePhoto';
import { Role } from '../model/role/entities/role.entity';
import { UserRole } from '../model/UserRole';
import { UserStatus } from '../model/user-status/entities/user-status.entity';
import { Department } from '../model/department/entities/department.entity';
import { Faculty } from '../model/faculty/entities/faculty.entity';
import { Level } from '../model/level/entities/level.entity';

@Injectable()
export class DatabaseService {

  constructor(private readonly eProps: ConfigurationProperties) { }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      'type': 'postgres',
      'host': this.eProps.getDatabaseHost(),
      'port': this.eProps.getDatabasePort(),
      'username': this.eProps.getDatabaseUsername(),
      'password': this.eProps.getDatabasePassword(),
      'synchronize': true,
      'logging': true,
      "entities": [join(__dirname, '../model/**/*{.ts,.js}'), Country, User, UserSignature, UserProfilePhoto, Role, UserRole, UserStatus, Department, Faculty, Level],
      'entitySkipConstructor': true,
      'dropSchema': false,
      'cache': false,
      'entityPrefix': undefined,
      "extra": {
        "connectionLimit": this.eProps.getMaxNumberOfClientOrm()
      },
      autoLoadEntities: true,
      'keepConnectionAlive': true,
      
    }
  }
}
