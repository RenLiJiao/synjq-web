import { redirect } from '@remix-run/node'
import bcrypt from 'bcryptjs'

import prisma from '~/db.server'
import {
    getUserSession,
    createUserSession,
    destroyUserSession,
} from '~/session.server'

const fetchUser = async (query) => {
    const user = await prisma.user.findUnique({
        where: query,
    })
    if (!user) throw '用户不存在'

    return user
}

export const getUser = async (request) => {
    const session = await getUserSession(request)
    const userId = session.get('userId')
    if (!userId) {
        throw redirect('/login')
    }

    const user = await fetchUser({ id: userId })
    return user
}

export const login = async ({ username, password }) => {
    const user = await fetchUser({ username })

    const isCorrectPassword = await bcrypt.compare(password, user.password)
    if (!isCorrectPassword) throw '密码不正确'

    return createUserSession(user.id, '/home')
}

export const logout = async (request) => {
    const session = await getUserSession(request)
    return destroyUserSession(session, '/login')
}
