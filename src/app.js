import express from 'express'
import productRoutes from './routes/products.routes.js'
import indexRouter from './routes/index.routes.js'
import clientRouter from './routes/clients.routes.js'

const app = express()


app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});


app.use(express.json())

app.use(indexRouter)
app.use('/api' ,productRoutes)
app.use('/api', clientRouter)

export default app