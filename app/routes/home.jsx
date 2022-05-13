import { Link, Outlet } from '@remix-run/react'
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
                    <Link to="/home/data-task">
                        <Button
                            minimal
                            icon="data-connection"
                            text="数据任务"
                        />
                    </Link>
                    <Link to="/home/data-flow">
                        <Button minimal icon="data-lineage" text="数据流向" />
                    </Link>
                    <Link to="/home/data-node">
                        <Button minimal icon="database" text="数据节点" />
                    </Link>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Button minimal icon="notifications" />
                </Navbar.Group>
            </Navbar>
            <div>
                <Outlet />
            </div>
        </>
    )
}
