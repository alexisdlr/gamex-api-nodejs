import {Router} from 'express'
import { getClients, postClients } from '../controllers/clients.controller.js'
const router = Router()

router.get('/clients', getClients)
router.post('/clients', postClients)


export default router