import Home from './home'
import { getUser } from '~/models/user.server'

export const loader = () => {
    return getUser()
}

export default function Index() {
    // TODO: check user login status
    return <Home />
}
