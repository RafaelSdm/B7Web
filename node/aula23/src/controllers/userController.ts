import {Request, Response} from 'express'

export const nome = (req: Request, res: Response) =>{


    console.log("query string:", req.query)

    let name: string = req.query.nome as string;
    let idade: string = req.query.idade as string;


    res.render('pages/nome', {
        name: name,
        idade: idade
    })
}


export const idadeForm = (req: Request, res: Response) =>{

    

    res.render('pages/idade')
        
}


export const idadePost =(req: Request, res: Response) =>{

    let showAge: boolean = false;

    

    let idade: number = 0;

    if(req.body.idade){
        let ano: number = parseInt( req.body.idade as string);

        let anoAtual: number = new Date().getFullYear();

         idade = anoAtual - ano;

         showAge = true;
    }

    res.render('pages/idade' , {
        idade: idade,
        
        showIdade: showAge
    });
}