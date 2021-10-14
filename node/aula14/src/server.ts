import express, {Request, Response} from 'express'

import path from 'path'
import { dirname } from 'path/posix'

import mainRoutes  from './routes/index'
import painelRoutes from './routes/painel'


const server = express()

//console.log(path.join(__dirname, '../public'));


server.use(express.static(path.join(__dirname, '../public')))

server.use('/',mainRoutes);

server.use('/painel',painelRoutes);




server.use((req: Request, res: Response)=>{

    res.status(404).send('Pagina nao encontrada');
    

})



server.listen(80);

