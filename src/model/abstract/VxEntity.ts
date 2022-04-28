import { Column, Index, JoinColumn, ManyToOne, RelationId } from 'typeorm';
import { VmEntity } from './VmEntity';

interface UserAttachment {
   _id : number;
  updated_on: Date;
  created_on: Date;
  name: string;
  description: string;
  abbreviation: string;
  user_id: number;
  user: IntUser;
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
  getUser(): IntUser;
  setUser(user: IntUser): void;
}


export interface IntUser {

   _id : number;
/*  updated_on: Date;
  created_on: Date;
  first_name: string;
  last_name: string;
  about: string;
  matriculation_number: string;
  department: any;
  faculty: any;
  level: any;
  country: any;
  department_id: number;
  faculty_id: number;
  level_id: number;
  country_id: number;
  email_address: string;
  username: string;
  password: string;
  confirm_password: string;
  hash: string;
  salt: string;
  user_full_name: string;
  user_email_address: string;
  role: string[] | string | number[];
  user_role_id: number;
  status: any;
  user_profile_photo: UserAttachment;
  user_signature: UserAttachment;
  roles: any[];
  status_id: number;
  reset_password_token: string;
  reset_password_expires: string;
  role_ids: number;*/


  getId(): number;
  setId(id: number): void;
  getCreatedOn(): Date;
  setCreatedOn(created_on: Date): void;
  getUpdatedOn(): Date;
  setUpdatedOn(updated_on: Date): void;
  getEmailAddress(): string;
  setEmailAddress(email_address: string): void;
  getUsername(): string;
  setUsername(username: string): void;
  getHash(): string;
  getSalt(): string;
  getRole(): number[];
  getStatus(): any;
  setStatus(status: any): void;
  getUserProfilePhoto(): UserAttachment;
  setUserProfilePhoto(user_profile_photo: UserAttachment): void;
  getUserSignature(): UserAttachment;
  setUserSignature(user_signature: UserAttachment): void;
  getUserRoleId(): number;
  setRole(role: number[]): void;
  setSalt(salt: string): void;
  setHash(hash: string): void;
  getRoles(): any[];
  setRoles(roles: any[]): void;
  addRole(role: any): void;
  getPassword(): string;
  setPassword(password: string): void;
  getConfirmPassword(): string;
  setConfirmPassword(password: string): void;
  getStatusId(): number;
  getResetPasswordToken(): string;
  setResetPasswordToken(reset_password_token: string): void;
  getResetPasswordExpires(): string;
  setResetPasswordExpires(reset_password_expires: string): void;
  getUserFullName(): string;
  setUserFullName(user_full_name: string): void;
  getUserEmailAddress(): string;
  setUserEmailAddress(user_email_address: string): void;
  deleteTransientProps(): void;

 getFirstName(): string;
  setFirstName(first_name: string): void;
  getLastName(): string;
  setLastName(last_name: string): void;
  getAbout(): string;
  setAbout(about: string): void;
  getMatriculationNumber(): string;
  setMatriculationNumber(matriculation_number: string): void;
  getDepartment(): any;
  setDepartment(department: any): void;
  getFaculty(): any;
  setFaculty(faculty: any): void;
  getLevel(): any;
  setLevel(level: any): void;
  getCountry(): any;
  setCountry(country: any): void;
  getDepartmentId(): number;
  getFacultyId(): number;
  getLevelId(): number;
  getCountryId(): number;

}

export class VxEntity extends VmEntity {

  constructor(data?: any) {
    super(data);
    if (data) {
      this.user_id = data.user_id ? data.user_id : undefined;
      this.user = data.user ? data.user : undefined;
    }
  }

  @Index()
  @ManyToOne('User', {
    'eager': false,
    'nullable': true,
    'onDelete': 'SET NULL'
  })
  @JoinColumn({
    'name': 'user_id'
  })
  public user: IntUser;

  @Column({
    'nullable': true
  })
  @RelationId((self: VxEntity) => self.user)
  protected user_id?: number;

  public getUserId(): number {
    return this.user_id as any;
  }

  public setUserId(user_id: number): void {
    this.user_id = user_id;
  }

  public getUser(): IntUser {
    return this.user as any;
  }

  public setUser(user: IntUser): void {
    this.user = user;
  }

}