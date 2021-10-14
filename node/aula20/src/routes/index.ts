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



router.get('/nome',(req: Request, res: Response) =>{


    console.log("query string:", req.query)

    let name: string = req.query.nome as string;
    let idade: string = req.query.idade as string;


    res.render('pages/nome', {
        name: name,
        idade: idade
    })
})





router.get('/idade', (req: Request, res: Response) =>{

    let showAge: boolean = false;

    

    let idade: number = 0;

    if(req.query.idade){
        let ano: number = parseInt( req.query.idade as string);

        let anoAtual: number = new Date().getFullYear();

         idade = anoAtual - ano;

         showAge = true;
    }

    res.render('pages/idade' , {
        idade: idade,
        
        showIdade: showAge
    });
})

export default router;