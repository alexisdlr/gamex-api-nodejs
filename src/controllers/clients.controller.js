import { pool } from "../db.js"

export const getClients = async (req, res) => {
  try {
    const [rows] = await pool.query('select * from clientes')
    res.json(rows)
  } catch (error) {
    return res.status(500).json({
      message: "algo salio mal"
    })
  }
}
export const postClients = async (req, res) => {
  try {
    const {id, nombre, review , imagen} = req.body
    const [rows] = await pool.query('insert into clientes values (?,?,?,?)', [id, nombre, review, imagen])
    res.send({
      id: rows.insertId,
      nombre,
      review,
      imagen
    })
    console.log(rows)  
  } catch (error) {
    return res.status(500).json({
      message: "algo salio mal"
    })
  }
 
}