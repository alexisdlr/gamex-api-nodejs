import { pool } from "../db.js"

export const getClients = async (req, res) => {
  const [rows] = await pool.query('select * from clientes')
  res.json(rows)
}
export const postClients = async (req, res) => {
  const {id, nombre, review , imagen} = req.body
  const [rows] = await pool.query('insert into clientes values (?,?,?,?)', [id, nombre, review, imagen])
  res.send({
    id: rows.insertId,
    nombre,
    review,
    imagen
  })
  console.log(rows)
  
}