import { VxEntityOne } from '../../abstract/VxEntityOne';
import { Column, Entity, ManyToOne, JoinColumn, RelationId, BeforeUpdate } from 'typeorm';
import { IFaculty } from '../../faculty/entities/ifaculty.entity';

@Entity()
export class Department extends VxEntityOne {

  constructor(data?: any) {
    super(data);
    if (data) {
      this.faculty = data.faculty ? data.faculty : undefined;
      this.faculty_id = data.faculty ? data.faculty : undefined;
    }
  }

  @ManyToOne('Faculty', {
    'eager': false,
    'nullable': false,
    'onDelete': 'CASCADE'
  })
  @JoinColumn({
    'name': 'faculty_id'
  })
  private faculty: IFaculty;

  @Column({
    'nullable': false
  })
  @RelationId((department: Department) => department.faculty)
  private faculty_id: number;

  public getFaculty(): IFaculty {
    return this.faculty;
  }

  public setFaculty(faculty: IFaculty): void {
    this.faculty = faculty;
  }

  public getFacultyId(): number {
    return this.faculty_id;
  }

  @BeforeUpdate()
  public initInstances(): void {
    if (typeof this.faculty === 'string' || typeof this.faculty === 'number') this.faculty = undefined as any;
  }

}