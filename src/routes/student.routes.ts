import { Router } from "express";
import StudentController from "../controllers/student/studentCreate.controller";

const routes = Router()

export const studentRoutes = () => {

    routes.post('/', StudentController.store)
   
    return routes
}
