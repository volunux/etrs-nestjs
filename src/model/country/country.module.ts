import { Module } from '@nestjs/common';
import { CountryServiceImpl } from './service/country.service.impl';
import { CountryController } from './country.controller';
import { CountryRepositoryImpl } from './repository/country.repository.impl';
import { ConfigurationPropertiesModule } from '../../module/configuration-properties/configuration-properties.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';

@Module({
  imports: [ConfigurationPropertiesModule],
  controllers: [CountryController],
  providers: [CountryServiceImpl , CountryRepositoryImpl],
  exports: [CountryServiceImpl]
})
export class CountryModule {}
