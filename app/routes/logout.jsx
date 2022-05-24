import { logout } from '~/models/user.server'

export const action = async ({ request }) => await logout(request)
