import { redirect } from '@remix-run/node'

export const loader = () => redirect('/home')

export default function Index() {
    return null
}
