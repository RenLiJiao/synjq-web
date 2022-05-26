import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function seed() {
    const password = await bcrypt.hash('admin', 10)
    await prisma.user.create({
        data: {
            username: 'admin',
            realname: '管理员',
            password,
        },
    })
}

seed()
