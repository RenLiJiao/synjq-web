import { redirect } from '@remix-run/node'

import { logout } from '~/models/user.server'

export const action = async () => {
    try {
        await logout()
        return redirect('/home')
    } catch (error) {
        return json(error, { status: 400 })
    }
}
