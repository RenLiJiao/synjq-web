import {
    NavLink,
    Link,
    Outlet,
    useSubmit,
    useLoaderData,
} from '@remix-run/react'
import {
    Navbar,
    Alignment,
    Button,
    Popover,
    Menu,
    Position,
    MenuItem,
    MenuDivider,
} from '@blueprintjs/core'
import { json } from '@remix-run/node'

import UserProfile from '~/components/user-profile'
import { getUser } from '~/models/user.server'

export const meta = () => ({ title: '首页 | 九桥同步 Synjq' })

export const loader = async ({ request }) =>
    json({
        user: await getUser(request),
    })

export default function Home() {
    const { user } = useLoaderData()
    const submit = useSubmit()
    return (
        <>
            <Navbar fixedToTop className="bp4-dark">
                <Navbar.Group className="pl-3" align={Alignment.LEFT}>
                    <Navbar.Heading>
                        <Link
                            className="text-inherit hover:text-inherit hover:no-underline"
                            to="/home"
                        >
                            <div className="text-white font-bold text-xl font-serif">
                                九桥同步 Synjq
                            </div>
                        </Link>
                    </Navbar.Heading>
                    <Navbar.Divider />
                    <NavLink
                        className="hover:no-underline"
                        to="/home/data-task"
                    >
                        {({ isActive }) => (
                            <Button minimal={!isActive} icon="data-connection">
                                数据任务
                            </Button>
                        )}
                    </NavLink>
                    <NavLink
                        className="hover:no-underline"
                        to="/home/data-link"
                    >
                        {({ isActive }) => (
                            <Button
                                className="ml-2"
                                minimal={!isActive}
                                icon="data-lineage"
                            >
                                数据链路
                            </Button>
                        )}
                    </NavLink>
                    <NavLink
                        className="hover:no-underline"
                        to="/home/data-node"
                    >
                        {({ isActive }) => (
                            <Button
                                className="ml-2"
                                minimal={!isActive}
                                icon="database"
                            >
                                数据节点
                            </Button>
                        )}
                    </NavLink>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Button minimal icon="notifications" />
                    <Popover
                        content={
                            <Menu>
                                <UserProfile user={user} />
                                <MenuDivider />
                                <MenuItem
                                    icon="trash"
                                    intent="danger"
                                    text="退出登录"
                                    onClick={() =>
                                        submit(null, {
                                            method: 'post',
                                            action: '/logout',
                                        })
                                    }
                                />
                            </Menu>
                        }
                        position={Position.BOTTOM_RIGHT}
                    >
                        <Button className="ml-2" minimal icon="user" />
                    </Popover>
                </Navbar.Group>
            </Navbar>
            <main className="bp4-dark min-h-screen navbar-escape">
                <Outlet />
            </main>
        </>
    )
}
