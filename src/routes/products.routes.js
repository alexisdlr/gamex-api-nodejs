import {Router} from 'express'
import { 
  deleteProducts, 
  getProducts, 
  postProducts, 
  putProducts,
  getProduct
} from '../controllers/products.controller.js'

const router = Router()

router.get('/products', getProducts)

router.get('/products/:id', getProduct)

 
router.post('/products', postProducts)
 
router.put('/products', putProducts)
 
router.delete('/products', deleteProducts)

export default router

