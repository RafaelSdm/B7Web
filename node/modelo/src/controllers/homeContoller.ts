

import {Request, Response} from 'express'

import {Product} from '../models/Product'


export const home = (req:Request, res: Response) =>{
    let user = {
        name: 'Rafael',
        age: 14
    }

    let showOld = false;

    if(user.age > 50){
        showOld = true
    }


    let list = Product.getAll();

    let expensiveList = Product.getPriceAfter(30);


    res.render('pages/home', {
        user: user,
        user1: 'damasceno' ,
        showWelcome: true,
        showOld: showOld,
        products: list,
        expensive: expensiveList,

        lista:[
          
        ]

        
        
    } );
}