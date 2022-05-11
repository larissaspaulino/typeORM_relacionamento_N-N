import { AppDataSource } from "../../data-source"
import { Student } from "../../entities/student.entity"
import { AppError } from "../../errors/appError"
import { StudentParams } from "../../interfaces/student"

export const createStudentService = async ({ name, age, phone }: StudentParams): Promise<Student> => {
    const studentRepository = AppDataSource.getRepository(Student)

    const studentAlreadyExists = await studentRepository.findOne({
        where: {
            name
        }
    })

    if (studentAlreadyExists) {
        throw new AppError( "Student already registered.", 409)
    }

    const student = studentRepository.create({
        name, 
        age, 
        phone
    })

    await studentRepository.save(student)

    return student
}


export default createStudentService  