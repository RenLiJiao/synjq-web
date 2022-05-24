import { redirect, json } from '@remix-run/node'
import { Form, useActionData, useTransition } from '@remix-run/react'
import { useEffect, useRef } from 'react'
import {
    FormGroup,
    InputGroup,
    Button,
    Toaster,
    Position,
} from '@blueprintjs/core'
import { login } from '~/models/user.server'

export const meta = () => ({ title: '登录 | 九桥同步 Synjq' })

export const action = async ({ request }) => {
    const formData = await request.formData()
    const username = formData.get('username')
    const password = formData.get('password')

    try {
        await login({ username, password })
        return redirect('/home')
    } catch (error) {
        return json(error, { status: 400 })
    }
}

export default function Login() {
    const actionData = useActionData()
    const { submission } = useTransition()
    const toastRef = useRef(null)

    useEffect(() => {
        if (actionData) {
            toastRef.current?.show({
                message: actionData.rawMessage,
                intent: 'danger',
            })
        }
    }, [actionData])

    return (
        <div className="flex justify-center items-center bp4-dark h-screen">
            <div className="flex flex-col w-72">
                <div className="self-center text-white font-bold text-3xl font-serif">
                    九桥同步 Synjq
                </div>
                <Form method="post" className="mt-8">
                    <FormGroup labelFor="username">
                        <InputGroup
                            autoFocus
                            required
                            disabled={!!submission}
                            id="username"
                            name="username"
                            leftIcon="user"
                            placeholder="请输入用户名"
                        />
                    </FormGroup>
                    <FormGroup disabled={!!submission} labelFor="password">
                        <InputGroup
                            required
                            disabled={!!submission}
                            id="password"
                            name="password"
                            type="password"
                            leftIcon="key"
                            placeholder="请输入密码"
                        />
                    </FormGroup>
                    <Button
                        className="mt-8"
                        fill
                        intent="primary"
                        type="submit"
                        loading={!!submission}
                    >
                        登录
                    </Button>
                </Form>
            </div>
            <Toaster position={Position.TOP} ref={toastRef} />
        </div>
    )
}
