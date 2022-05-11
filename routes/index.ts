import { Express } from 'express'
import { subjectRoutes } from './subject.routes'
import { studentRoutes } from "./student.routes";

export const appRoutes = (app: Express) => {
    app.use('/sujects', subjectRoutes())
    app.use('/studentes', studentRoutes)
}