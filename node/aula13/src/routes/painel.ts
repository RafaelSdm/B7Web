import {Router, Request, Response} from 'express'

const router = Router();


router.get('/', (req:Request, res: Response) =>{
    res.send('home painer');
})


router.get('/noticias', (req: Request, res: Response) =>{
    res.send("formulario de exemplo do painel");
})




export default router;