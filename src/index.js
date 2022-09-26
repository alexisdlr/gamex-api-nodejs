import express from 'express'
import productRoutes from './routes/products.routes.js'
import indexRouter from './routes/index.routes.js'
import clientRouter from './routes/clients.routes.js'
const app = express()

app.listen('3000')

app.use(express.json())

app.use(indexRouter)
app.use('/api' ,productRoutes)
app.use('/api', clientRouter)


