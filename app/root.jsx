import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react'

export const meta = () => ({
    charset: 'utf-8',
    title: '九桥同步 Synjq',
    viewport: 'width=device-width,initial-scale=1',
})

import styles from './styles/app.css'
import normalizeCSS from 'normalize.css/normalize.css'
import blueprint from '@blueprintjs/core/lib/css/blueprint.css'
import blueprintIcons from '@blueprintjs/icons/lib/css/blueprint-icons.css'
export const links = () => [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: normalizeCSS },
    { rel: 'stylesheet', href: blueprint },
    { rel: 'stylesheet', href: blueprintIcons },
]

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}
