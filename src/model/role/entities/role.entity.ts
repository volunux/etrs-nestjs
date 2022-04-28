import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, BeforeUpdate } from 'typeorm';
import { VxEntityTwo } from '../../abstract/VxEntityTwo';
import { IntUser } from '../../abstract/VxEntity';

@Entity()
export class Role extends VxEntityTwo {

  @Column({
    'nullable': false,
    'unique': false,
    'length': 150
  })
  private word: string;

  constructor(data?: any) {
    super(data);
    if (data) {
      this.word = data.word ? data.word : undefined;
    }
  }

  public getWord(): string {
    return this.word;
  }

  public setWord(word: string): void {
    this.word = word;
  }

  public getUser(): IntUser {
    return this.user;
  }

  public setUser(user: IntUser): void {
    this.user = user;
  }

}