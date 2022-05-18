import { H3, H6, Tag } from '@blueprintjs/core'

export default function UserProfile({ user }) {
    const { username, email, organization } = user
    return (
        <div className="flex flex-col items-end p-3">
            <H3>{username}</H3>
            <H6>{organization}</H6>
            <Tag>{email}</Tag>
        </div>
    )
}
