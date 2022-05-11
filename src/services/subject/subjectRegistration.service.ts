import { Subject } from 'typeorm/persistence/Subject'
import { AppDataSource } from '../../data-source'
import SubjectStudent from '../../entities/subjectStudent'

interface registrationParams {
  student_id: string
  subject_id: string
}

export const registrationSubjectService = async ({
  student_id,
  subject_id,
}: registrationParams)  => {
  const subjectStudentRepository = AppDataSource.getRepository(SubjectStudent)
  const subjectRepository = AppDataSource.getRepository(Subject)

    // const subject = subjectRepository.findOne({
    //     where: {
    //         id: subject_id
    //     }
    // })

  const subjectStudent = subjectStudentRepository.create({
    subjectId: subject_id,
    studentId: student_id,
  })

  await subjectStudentRepository.save(subjectStudent)

  return subjectStudent
}

export default registrationSubjectService
