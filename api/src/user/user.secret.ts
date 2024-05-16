import dotenv from "dotenv"

dotenv.config()

const SECRET: string = process.env.JWT_SECRET || 'secret'

export default SECRET