import { IUser } from '../user/entities/iuser.entity';

export interface IAttachment {

   _id : number;
  updated_on: Date;
  created_on: Date;
  name: string;
  description: string;
  abbreviation: string;
  user_id: number;
  user: IUser;
  location: string;
  mimetype: string;
  size: string;
  key: string;
  author_name: string;


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
  getLocation(): string;
  setLocation(location: string): void;
  getMimetype(): string;
  setMimetype(mimetype: string): void;
  getSize(): string;
  setSize(size: string): void;
  getKey(): string;
  setKey(key: string): void;
  getAuthorName(): string;
  setAuthorName(author_name: string): void;
  getUserId(): number;
  setUserId(user_id: number): void;
  getUser(): IUser;
  setUser(user: IUser): void;
} 