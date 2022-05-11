import { Entity, Column, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity()
export class Student {

    @PrimaryColumn('uuid')
    readonly id: string

    @Column()
    name: string

    @Column('int')
    age: number

    @Column('int', {
        nullable: true
    })
    phone: number

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}