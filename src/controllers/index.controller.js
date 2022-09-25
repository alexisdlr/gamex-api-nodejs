import {pool} from '../db.js'

export const index = async (req, res ) => {
  const [result] = await pool.query('select * from productos')
  await res.json(result)
}
