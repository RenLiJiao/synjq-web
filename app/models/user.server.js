import { redirect } from '@remix-run/node'
import AV from '~/leancloud.server'

export const getUser = () => {
    const currentUser = AV.User.current()
    if (!currentUser) {
        throw redirect('/login')
    }
    return currentUser
}
