import AV from '~/leancloud.server'

export const getUser = () => AV.User.current()
