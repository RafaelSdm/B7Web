import {Router, Request, Response} from 'express'

const router = Router();


router.get('/', (req:Request, res: Response) =>{
    let user = {
        name: 'Rafael',
        age: 14
    }

    let showOld = false;

    if(user.age > 50){
        showOld = true
    }
    res.render('pages/home', {
        user: user,
        user1: 'damasceno' ,
        showWelcome: true,
        showOld: showOld,
        products:[

            {title: 'Produto X', price: 10},
            {title: 'Produto y', price: 20},
            {title: 'Produto w', price: 40}
        ],

        lista:[
          
        ]

        
        
    } );
})


router.get('/contato', (req: Request, res: Response) =>{
    res.render('pages/contato')
})


router.get('/sobre', (req: Request, res: Response) =>{
    res.render('pages/sobre')
})

export default router;