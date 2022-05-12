import { Navbar, Alignment, Button } from '@blueprintjs/core'

export default function Index() {
    return (
        <>
            <Navbar fixedToTop>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>
                        <div>九桥同步 Synjq</div>
                    </Navbar.Heading>
                    <Navbar.Divider />
                    <Button
                        className="bp4-minimal"
                        icon="data-lineage"
                        text="数据链路"
                    />
                    <Button
                        className="bp4-minimal"
                        icon="database"
                        text="数据节点"
                    />
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Button className="bp4-minimal" icon="notifications" />
                </Navbar.Group>
            </Navbar>
        </>
    )
}
