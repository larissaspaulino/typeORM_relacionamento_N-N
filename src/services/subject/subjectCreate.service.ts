import { AppDataSource } from "../../data-source"
import { Subject } from "../../entities/subject.entity"
import { AppError } from "../../errors/appError"
import { SubjectParams } from "../../interfaces/subject"

export const createSubjectService = async ({ name, weekly_hours }: SubjectParams): Promise<Subject> => {
    const subjectRepository = AppDataSource.getRepository(Subject)

    const subjectAlreadyExists = await subjectRepository.findOne({
        where: {
            name
        }
    })

    if (subjectAlreadyExists) {
        throw new AppError("Subject already registered.", 409)
    }

    const subject = subjectRepository.create({
        name, 
        weekly_hours,
    })


    await subjectRepository.save(subject)

    return subject
}

export default createSubjectService  