

import {Request, Response} from 'express'


export const home = (req:Request, res: Response) =>{
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
}