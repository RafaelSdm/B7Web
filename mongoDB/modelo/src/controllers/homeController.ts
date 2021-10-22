import { Request, Response } from 'express';

import { Product } from '../models/Product';


import User from '../models/User'

export const home = async (req: Request, res: Response)=>{


   // let usuarios =  await User.find({});

   /*

   let usuarios = await User.findOne({
       email: 'marcelo@gmail.com'
   })

   */

   // let usuarios = await User.findById('61731414b4bb340c4509621e')


   /*


   let usuarios = await User.find({
       "name.firstName": 'Rafael'
       interests: "programação"

       age: {$gt: 47, $lt:70} 
        age: {$gt: 18}
   }).sort({age: -1, name: 1}); // -1 DESC 1 ASC

   */


   let usuarios = await User.find({
        age:{$gt: 18}
   }).skip(1).limit(1); // pular e mostrar 

   // gt maior que 
   // gte maior igual 
   // lt menor que  
   // lte menor igual





    console.log("Usuários: ", usuarios);


    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};