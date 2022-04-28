import { IUser } from '../../user/entities/iuser.entity';

export interface IFaculty {
   _id : number;
  updated_on: Date;
  created_on: Date;
  name: string;
  description: string;
  abbreviation: string;
  user_id: number;
  user: IUser;


  getId(): number;
  setId(id: number): void;
  getCreatedOn(): Date;
  setCreatedOn(created_on: Date): void;
  getName(): string;
  setName(name: string): void;
  getAbbreviation(): string;
  setAbbreviation(abbreviation: string): void;
  getDescription(): string;
  setDescription(description: string): void;
  getUpdatedOn(): Date;
  setUpdatedOn(updated_on: Date): void;
  getUserId(): number;
  setUserId(user_id: number): void;
  getUser(): IUser;
  setUser(user: IUser): void;
}