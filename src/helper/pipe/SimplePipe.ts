import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";

@Injectable()
export class SimplePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
      console.log(metadata);

      console.log('The value being ' , value);

      return value;
  }
}