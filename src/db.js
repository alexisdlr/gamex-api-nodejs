import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '1111',
  port: 3308,
  database: 'gamex'
})