import { Link, NavLink, Outlet } from '@remix-run/react'
import { Navbar, Alignment, Button } from '@blueprintjs/core'

export const meta = () => ({ title: '首页 | 九桥同步 Synjq' })

export default function Home() {
    return (
        <>
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>
                        <div>九桥同步 Synjq</div>
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
                </Navbar.Group>
            </Navbar>
            <main>
                <Outlet />
            </main>
        </>
    )
}
