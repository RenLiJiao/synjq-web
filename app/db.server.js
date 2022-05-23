import { Low, JSONFile } from 'lowdb'

let db

const initDB = () => {
    const adapter = new JSONFile(process.env.DATABASE_URL)
    const lowDB = new Low(adapter)
    return lowDB
}

if (process.env.NODE_ENV === 'production') {
    db = initDB()
} else {
    if (!global.__db__) {
        global.__db__ = initDB()
    }
    db = global.__db__
}

export default db
