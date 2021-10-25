import express, {Request, Response} from 'express'
import path from 'path'
import dotenv from 'dotenv'

import ApiRoutes from './routes/api'



dotenv.config();


const server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({extended: true}))


server.use(ApiRoutes);


server.use((req: Request, res: Response) =>{

    res.status(404);
    res.json({error: 'Endpoint nao encontrado'});

})


server.listen(process.env.PORT)