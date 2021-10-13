import {Router, Request, Response} from 'express'

const router = Router();


router.get('/', (req:Request, res: Response) =>{
    res.send('hello world :)');
})


router.get('/contato', (req: Request, res: Response) =>{
    res.send("formulario de exemplo");
})


router.get('/sobre', (req: Request, res: Response) =>{
    res.send("Pagina sobre");
})

export default router;