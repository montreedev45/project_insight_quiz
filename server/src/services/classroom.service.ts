import { prisma } from "../lib/prisma.js"

export const addClassroom = async (subjectId: string, classroomName: string, code: string) => {
    const existingSubject = await prisma.subject.findUnique({
        where: { id: subjectId }
    });
    if (!existingSubject) throw new Error("Subject not found");

    const existingClassroom = await prisma.classroom.findFirst({
        where: { subject_id: subjectId, name: classroomName }
    });
    if (existingClassroom) throw new Error("Classroom name already exits");

    const classroom = await prisma.classroom.create({
        data: {
            subject_id: subjectId,
            name: classroomName,
            code: code
        }
    });
    if (!classroom) throw new Error("Add classroom failed");

    return classroom;
}

export const classroomEnrollment = async (classroomId: string, studentId: string) => {
    const existingClassroom = await prisma.classroom.findUnique({ where: { id: classroomId } })
    if (!existingClassroom) throw new Error("Classroom not found")

    const existingStudent = await prisma.user.findUnique({ where: { id: studentId } })
    if (!existingStudent) throw new Error("Student not found")

    const enrollment = await prisma.classroomEnrollment.create({ data: { classroom_id: classroomId, student_id: studentId } })
    if (!enrollment) throw new Error("Enrollment failed")

    return enrollment
}