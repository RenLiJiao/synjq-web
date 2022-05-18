import { redirect } from '@remix-run/node'
import AV from '~/leancloud.server'

export const getUser = () => {
    const user = AV.User.current()
    if (!user) {
        throw redirect('/login')
    }
    return user
}

export const login = async ({ email, password }) =>
    await AV.User.loginWithEmail(email, password)

export const logout = async () => await AV.User.logOut()
