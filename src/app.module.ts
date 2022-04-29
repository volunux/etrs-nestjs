import { Module , NestModule , MiddlewareConsumer, RequestMethod, Global } from '@nestjs/common';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormValidationMiddleware } from './helper/middleware/FormValidation';
import { QueryConfigImplMiddleware } from './helper/middleware/QueryConfigImpl';
import { PaginationMiddleware } from './helper/middleware/PaginationMiddleware';
import { SearchFilterMiddleware } from './helper/middleware/SearchFilterMiddleware';
import { CountryModule } from './model/country/country.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database/database.service';


@Global()
@Module({
  imports: [CountryModule, TypeOrmModule.forRootAsync({
      useClass: DatabaseService,
      inject: [DatabaseService]
  }) ],
  controllers: [AppController],
  providers: [AppService, DatabaseService, QueryConfigImplMiddleware, FormValidationMiddleware, PaginationMiddleware, SearchFilterMiddleware /*S3ObjectChange*/],
})
export class AppModule implements NestModule {

  async configure(consumer: MiddlewareConsumer) {

    // consumer.apply(QueryConfigImplMiddleware, FormValidationMiddleware, PaginationMiddleware, SearchFilterMiddleware).forRoutes('country');
    // consumer.apply().forRoutes({path: '/^(.*)\/entries\/?$/i' , method: RequestMethod.ALL});
  }

}
