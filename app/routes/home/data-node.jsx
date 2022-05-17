import { InputGroup, Button, NonIdealState } from '@blueprintjs/core'

export const meta = () => ({ title: '数据节点 | 九桥同步 Synjq' })

export default function DataNode() {
    return (
        <div className="flex flex-col px-6 py-4">
            <div className="flex items-center justify-between">
                <InputGroup
                    className="w-1/4"
                    leftIcon="search"
                    type="search"
                    placeholder="搜索"
                />
                <Button icon="add" intent="primary">
                    添加节点
                </Button>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="mt-36">
                    <NonIdealState
                        icon="archive"
                        title="暂无节点"
                        description="您还未添加数据节点，点击下方按钮添加数据节点"
                        children={
                            <Button icon="add" intent="primary">
                                添加节点
                            </Button>
                        }
                    />
                </div>
            </div>
        </div>
    )
}
