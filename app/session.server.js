import { createCookieSessionStorage, redirect } from '@remix-run/node'

const storage = createCookieSessionStorage({
    cookie: {
        name: 'SYNJQ_session',
        secure: false,
        secrets: [process.env.SESSION_SECRET],
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24,
        httpOnly: true,
    },
})

export async function createUserSession(userId, redirectTo) {
    const session = await storage.getSession()
    session.set('userId', userId)
    return redirect(redirectTo, {
        headers: {
            'Set-Cookie': await storage.commitSession(session),
        },
    })
}

export async function destroyUserSession(session, redirectTo) {
    return redirect(redirectTo, {
        headers: {
            'Set-Cookie': await storage.destroySession(session),
        },
    })
}

export function getUserSession(request) {
    return storage.getSession(request.headers.get('Cookie'))
}
