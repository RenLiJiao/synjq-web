import { redirect } from '@remix-run/node'
import db from '~/db.server'

export const getUser = () => {
    const user = db.data
    if (!user) {
        throw redirect('/login')
    }
    return user
}

export const login = async ({ username, password }) => null

export const logout = async () => null
