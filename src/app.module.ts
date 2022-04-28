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


/*import S3ObjectChange from './helper/file/S3ObjectChange';
import { DepartmentModule } from './model/department/department.module';
import { FacultyModule } from './model/faculty/faculty.module';
import { LevelModule } from './model/level/level.module';
import { PublisherModule } from './model/publisher/publisher.module';
import { OrderStatusModule } from './model/order-status/order-status.module';
import { DeliveryMethodModule } from './model/delivery-method/delivery-method.module';
import { PaymentMethodModule } from './model/payment-method/payment-method.module';
import { RoleModule } from './model/role/role.module';
import { ThesisCommentModule } from './model/thesis-comment/thesis-comment.module';
import { ThesisDeleteRequestModule } from './model/thesis-delete-request/thesis-delete-request.module';
import { ThesisDeleteRequestStatusModule } from './model/thesis-delete-request-status/thesis-delete-request-status.module';
import { ThesisGradeModule } from './model/thesis-grade/thesis-grade.module';
import { OrderModule } from './model/order/order.module';
import { ThesisReplyModule } from './model/thesis-reply/thesis-reply.module';
import { ThesisStatusModule } from './model/thesis-status/thesis-status.module';
import { ThesisModule } from './model/thesis/thesis.module';
import { UserModule } from './model/user/user.module';
import { UserStatusModule } from './model/user-status/user-status.module';
import { ObjectSweepModule } from './model/object-sweep/object-sweep.module';
import { AuthenticationModule } from './model/authentication/authentication.module';
import { UserThesisModule } from './model/user-thesis/user-thesis.module';
import { ProfileModule } from './model/profile/profile.module';
import { UserOrderModule } from './model/user-order/user-order.module';
import { CheckoutModule } from './model/checkout/checkout.module';
import { GeneralThesisModule } from './model/general-thesis/general-thesis.module';
import { SimplePipe } from './helper/pipe/SimplePipe';
import { ValidationRegister } from './helper/validation/validation-register';*/

@Global()
@Module({
  imports: [CountryModule, TypeOrmModule.forRootAsync({
      useClass: DatabaseService,
      inject: [DatabaseService]
  }) /* DepartmentModule, FacultyModule, LevelModule, PublisherModule, OrderStatusModule, DeliveryMethodModule, PaymentMethodModule, RoleModule,
  ThesisCommentModule, ThesisDeleteRequestModule, ThesisDeleteRequestStatusModule, ThesisGradeModule, OrderModule, ThesisReplyModule, ThesisStatusModule, ThesisModule,
  UserModule, UserStatusModule, ObjectSweepModule, AuthenticationModule, UserThesisModule, ProfileModule, UserOrderModule, CheckoutModule, GeneralThesisModule*/],
  controllers: [AppController],
  providers: [AppService, DatabaseService, QueryConfigImplMiddleware, FormValidationMiddleware, PaginationMiddleware, SearchFilterMiddleware /*S3ObjectChange*/],
})
export class AppModule implements NestModule {

  async configure(consumer: MiddlewareConsumer) {

    // consumer.apply(QueryConfigImplMiddleware, FormValidationMiddleware, PaginationMiddleware, SearchFilterMiddleware).forRoutes('country');
    // consumer.apply().forRoutes({path: '/^(.*)\/entries\/?$/i' , method: RequestMethod.ALL});
  }

}
