import AV from 'leancloud-storage'

const production = process.env.NODE_ENV === 'production'

const init = () => {
    AV.init({
        appId: 'aXF1nkSLFcfI8d6bxTNXVB1x-gzGzoHsz',
        appKey: 'CzynxdWcDiJpnCL4hLwhxksR',
        serverURL: 'https://api.tb-soft.net',
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
