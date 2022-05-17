import { redirect } from '@remix-run/node'
import AV from '~/leancloud.server'

export const getUser = () => {
    const user = AV.User.current()
    if (!user) {
        throw redirect('/login')
    }
    return user
}

export const login = async ({ email, password }) => {
    const user = await AV.User.loginWithEmail(email, password)
    if (!user) {
        throw new Error('用户名或密码错误')
    }
    return user
}

export const logout = async () => {
    await AV.User.logOut()
    return redirect('/login')
}
