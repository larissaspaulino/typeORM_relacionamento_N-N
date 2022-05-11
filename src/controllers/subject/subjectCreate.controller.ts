// Criação de um Subject

// POST - /subjects/

// Exemplo de Requisição

// POST - /subjects/

// Corpo da Requisição

// {
//     "name": "Matemática",
//     "weekly_hours": 6,
// }

// Exemplo de Resposta

// 201 - Created
// {
//     "id": "835db4ca-8a2e-4be5-887e-65345b0c73b6",
//     "name": "Matemática",
//     "weekly_hours": 6,
//     "students": []
// }

// Casos de Erro

// 409 - Conflict - "Subject already registered" 
// Ao tentar adicionar um Subject com um nome já registrado na DB


import { Request, response, Response } from 'express'
import createSubjectService from '../../services/subject/subjectCreate.service'
import listSubjectService from '../../services/subject/subjectListById.service'
import registrationSubjectService from '../../services/subject/subjectRegistration.service'

export default class SubjectControllers {
  static async store (req: Request, res: Response) {
    const data = req.body
    
    const student = await createSubjectService(data)
    console.log(student)

    return res.status(201).json(student)
  }
  static async registration (req: Request, res: Response) {
    console.log("PARAMETROS", req.params);
    // console.log(req.body)

    const { student_id } = req.body
    const { subject_id } = req.params
    

    const register = await registrationSubjectService({ student_id, subject_id })

    return res.status(200).json(register)
  }
  static async show (req: Request, res: Response) {

    const { subject_id } = req.params
    

    const subject = await listSubjectService(subject_id)

    return res.status(200).json(subject)
  }
} 