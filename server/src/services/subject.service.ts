import { prisma } from "../lib/prisma.js"

export const addSubject = async (subjectName: string, teacherId: string) => {
    const existingSubject = await prisma.subject.findFirst({ where: { name: subjectName, teacher_id: teacherId } })
    if (existingSubject) throw new Error("Subject name already exists")

    const subject = await prisma.subject.create({ data: { name: subjectName, teacher_id: teacherId } })
    if (!subject) throw new Error("Add subject failed")

    return subject;
}