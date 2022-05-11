import { Button } from '@blueprintjs/core'

export default function Index() {
    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
            <h1 className="text-3xl font-bold underline mb-20">
                Welcome to Remix
            </h1>
            <Button intent="success" text="测试" />
        </div>
    )
}
