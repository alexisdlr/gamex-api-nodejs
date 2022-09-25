import { pool } from "../db.js"

export const getProducts = async (req, res) => {
    const [result] = await pool.query('select * from productos')
    res.json(result)
}

export const getProduct = async (req, res) => {
  const [result] = await pool.query('select * from productos where id = ?', req.params.id)
  if(result === []) {
    res.send('no se encontro ningun resultado')
    console.log('hola')
    return
  }
  console.log(result)
  res.json(result)
}

export const postProducts = async (req, res) => {
  const {id, nombre, descripcion, precio, imagen, categoria, rating, numReviews} = req.body
  const [rows] = await pool.query('INSERT INTO productos values (?,?,?,?,?,?,?,?)', [id, nombre, descripcion, precio, categoria, imagen, rating, numReviews])
  res.send({
    id: rows.insertId,
    nombre,
    descripcion,
    precio,
    imagen,
    categoria,
    rating
  })
}
export const putProducts = (req, res) => {
  res.send('actualizando productos')
}
export const deleteProducts = (req, res) => {
  res.send('eliminando productos')
}