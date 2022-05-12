import { Navbar, Alignment, Button } from '@blueprintjs/core'

export default function Index() {
    return (
        <>
            <Navbar fixedToTop>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>九桥同步 Synjq</Navbar.Heading>
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
            </Navbar>
        </>
    )
}
