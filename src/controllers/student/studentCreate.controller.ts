// Criação de um Student

// POST - /students/

// Exemplo de requisição

// POST - /students/

// Corpo da Requisição

// {
//     "name": "Exemplo",
//     "age": 21,
//     "phone": 12345678
// }

// Exemplo de Resposta

// 201 - Created
// {
//     "id": "835db4ca-8a2e-4be5-887e-65345b0c73b6",
//     "name": "Exemplo",
//     "age": 21,
//     "phone": 12345678
// }

// Casos de Erro
// 409 - Conflict - "Student already registered"
// Ao tentar adicionar um Student com um nome já registrado na DB


import { Request, Response } from 'express'
import createStudentService from '../../services/student/studentCreate.service'

export default class StudentController {
    static async store (req: Request, res: Response) {
     

            const data = req.body
    
            const student = await createStudentService(data)
    
            return res.status(201).json(student)

    }
    
}