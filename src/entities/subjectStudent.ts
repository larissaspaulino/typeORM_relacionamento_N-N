import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'
import { Student } from './student.entity'
import { Subject } from './subject.entity'
import { v4 as uuid } from 'uuid'

@Entity('subject_student')
class SubjectStudent {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Subject)
  subject: Subject

  @ManyToOne(() => Student, { eager: true })
  student: Student

  @Column()
  subjectId: string

  @Column()
  studentId: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export default SubjectStudent
