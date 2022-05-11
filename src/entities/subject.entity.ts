import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinTable } from "typeorm";
import { v4 as uuid } from 'uuid'
import SubjectStudent from "./subjectStudent";

@Entity()
export class Subject {
    
    @PrimaryColumn('uuid')
    readonly id: string

    @Column()
    name: string

    @Column('int')
    weekly_hours: number

    @OneToMany(() => SubjectStudent, (subjectStudent) => subjectStudent.subject, {
        eager: true,
      })
      
      @JoinTable()
      students: SubjectStudent[];
    
      @CreateDateColumn()
      created_at: Date;
    
      @UpdateDateColumn()
      updated_at: Date;

      constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}