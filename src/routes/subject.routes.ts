import { Router } from 'express'
import SubjectControllers from '../controllers/subject/subjectCreate.controller'

const routes = Router()

export const subjectRoutes = () => {
  routes.post('/', SubjectControllers.store)
  routes.get('/:subject_id', SubjectControllers.show)
  routes.post('/registration/:subject_id', SubjectControllers.registration)

  return routes
}
