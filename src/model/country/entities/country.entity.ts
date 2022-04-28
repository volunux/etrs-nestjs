import { VxEntityOne } from 'src/model/abstract/VxEntityOne';
import { Entity } from 'typeorm';

@Entity()
export class Country extends VxEntityOne {

  constructor(data?: any) {
    super(data);
  }

}