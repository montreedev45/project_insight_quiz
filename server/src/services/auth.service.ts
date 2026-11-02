import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '../lib/prisma.js'
import { Role } from '@prisma/client'

export const login = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: { email }
    })
    if (!user) {
        throw new Error("Incorrect email or password")
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash)
    if (!isPasswordValid) throw new Error("Incorrect email or password")

    const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET as string,
        { expiresIn: (process.env.JWT_EXPIRES_IN || '1d') as any }
    );

    return { user, token };
}

export const register = async (email: string, password: string, firstName: string, lastName: string, role: Role) => {
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) throw new Error("Email already exists")

    //hash password
    const saltRounds = 10;
    const password_hash = await bcrypt.hash(password, saltRounds);

    const user = await prisma.user.create({ data: { email, password_hash: password_hash, first_name: firstName, last_name: lastName, role } })

    if (!user) {
        throw new Error("Register failed")
    }

    return user;
}