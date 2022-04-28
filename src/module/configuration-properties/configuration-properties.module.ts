import { Module, Global } from '@nestjs/common';
import ConfigurationProperties from '../../config/configuration.properties';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

@Global()
@Module({
  imports: [ConfigModule.forRoot({isGlobal: true, cache: true,
    validationSchema: Joi.object({
      NODE_ENV: Joi.string().valid('development', 'production', 'test').required().default('development'),
      PORT: Joi.number().required().default(3000)
    })
  })],
  providers: [ConfigurationProperties],
  exports: [ConfigurationProperties]
})
export class ConfigurationPropertiesModule {}
