import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from '@nestjs/class-transformer';
import { Country } from '../entities/country.entity';

@Injectable()
export class PlainToCountryPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;
    const country: Country = plainToClass(metatype, value);
    return country;
  }
}
