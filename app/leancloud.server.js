import AV from 'leancloud-storage/live-query'

const { LEANCLOUD_APP_ID, LEANCLOUD_APP_KEY, SERVER_URL, NODE_ENV } =
    process.env
const production = NODE_ENV === 'production'

const init = () => {
    AV.init({
        appId: LEANCLOUD_APP_ID,
        appKey: LEANCLOUD_APP_KEY,
        serverURL: SERVER_URL,
        production,
    })
}

if (production) {
    init()
} else {
    if (!global.__leancloud__) {
        init()
        global.__leancloud__ = true
    }
}

export default AV
