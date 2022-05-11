import { Express } from 'express'
import { subjectRoutes } from './subject.routes'
import { studentRoutes } from "./student.routes";

export const appRoutes = (app: Express) => {
    app.use('/subjects', subjectRoutes())
    app.use('/students', studentRoutes())
}