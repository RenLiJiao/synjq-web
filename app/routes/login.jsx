import { redirect } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { login } from '~/models/user.server'

export const action = async ({ request }) => {
    const formData = await request.formData()

    const email = formData.get('email')
    const password = formData.get('password')

    await login({ email, password })

    return redirect('/home')
}

export default function Login() {
    return (
        <div className="flex justify-center items-center bp4-dark dark-background h-screen">
            <div>
                <div className="text-white font-bold text-3xl font-serif">
                    九桥同步 Synjq
                </div>
                <Form method="post">
                    <p>
                        <label>
                            email: <input type="email" name="email" />
                        </label>
                    </p>
                    <p>
                        <label>
                            password: <input type="password" name="password" />
                        </label>
                    </p>
                    <p className="text-right">
                        <button
                            type="submit"
                            className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
                        >
                            Login
                        </button>
                    </p>
                </Form>
            </div>
        </div>
    )
}
