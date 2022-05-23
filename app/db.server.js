import { Low, JSONFile } from 'lowdb'

let db

const initDB = () => new Low(new JSONFile(process.env.DATABASE_URL))

if (process.env.NODE_ENV === 'production') {
    db = initDB()
} else {
    if (!global.__db__) {
        global.__db__ = initDB()
    }
    db = global.__db__
}

export default db
