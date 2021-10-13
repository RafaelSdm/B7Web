import express, {Request, Response} from 'express'


const server = express()


server.get('/', (req: Request, res: Response) =>{

    res.send("hello world");



})

server.get('/noticia/:slug', (req: Request, res: Response) =>{


    let slug = req.params.slug;

    res.send(`${slug}`);



})


server.get('/noticia/:slug', (req: Request, res: Response) =>{


    let slug = req.params.slug;

    res.send(`${slug}`);



})


server.get('/voo/:origem-:destino', (req: Request, res: Response) =>{
    

    let {origem, destino} = req.params


    res.send(`procurando voos de ${origem.toUpperCase()} ate ${destino.toUpperCase()}`)
})

server.listen(80);

