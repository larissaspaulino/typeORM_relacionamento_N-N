import { AppDataSource } from "../../data-source"
import { Subject } from "../../entities/subject.entity"

export const listSubjectService = async (subject_id: string) => {
    const subjectRepository = AppDataSource.getRepository(Subject)

    const subject = subjectRepository.findOne({
        where: {
            id: subject_id
        }
    })

    return subject
}

export default listSubjectService  