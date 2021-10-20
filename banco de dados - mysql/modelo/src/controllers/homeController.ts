import { Request, Response } from 'express';
import { json } from 'sequelize';


import {Op} from 'sequelize'



import { Product } from '../models/Product';


import { User } from '../models/User'

export const home = async (req: Request, res: Response)=>{


    await User.update({age: 18}, {
        where:{
            age:{
                [Op.lt]: 18
            }
        }
    })

    const users = await User.findAll();


    /*
    const user = User.build({
        name: 'teste',
        age: 2
    });

   // await user.save();
    */

   // create

   /*

   const user1 = await User.create({
       name: 'eduardo',
       age: 90
   })

   */
    
    

    


    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Rafael',
        lastName: 'Damasceno',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users: users
        
    });
};

export const novoUsuario = async (req: Request, res: Response) => {
    let { name, age } = req.body;

    if(name) {
        const newUser = User.build({ name });

        if(age) {
            newUser.age = parseInt(age);
        }

        await newUser.save();
    }

    res.redirect('/');
}