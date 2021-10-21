import { Request, Response } from 'express';
import { json } from 'sequelize';


import {Op} from 'sequelize'



import { Product } from '../models/Product';


import { User } from '../models/User';

import {UserInstance} from '../models/User'

export const home = async (req: Request, res: Response)=>{


    let usuario = await User.findOne({
        where:{
            name: 'rafael',
        }
    })

    //console.log("usuario 1 findonde ", usuario)

    if(usuario){
        console.log(`o usuário ${usuario.name} tem ${usuario.age} anos`);
    }else{
        console.log("usuario nao encotrado");
    }


    let usuario2 = await User.findByPk(16);

    if(usuario2){
        console.log(`o usuário ${usuario2.name} tem ${usuario2.age} anos`);
    }else{
        console.log("usuario nao encontrado");
    }





    const [usuario3, created] = await User.findOrCreate({
        where:{
            name: 'rafael',
            
        },

        defaults:{
            name: 'rafael',
            age: 97
        }
    })

    console.log("Usuario 3 - ", usuario3);
    console.log("Created 3 - ", created);






    await User.update({age: 18}, {
        where:{
            age:{
                [Op.lt]: 18
            }
        }
    })

    const users = await User.findAll();



    let result = await User.findAll({
        where:{
            id: 7
        }
    })

    if(result.length > 0){
        let usuario: UserInstance  = result[0];

        usuario.age = 800;
        usuario.name = 'joao das couve'

        await usuario.save();
    }



    await User.destroy({
        where:{
            age:{
                [Op.lte]: 18
            }
        }
    })


    let result2 = await User.findAll({
        where:{
            id: 2
        }
    })

    if(result2.length > 0){
        let usuario1: UserInstance = result2[0];

        await usuario1.destroy();
    }

    //console.log(`rresults: ${result}`);


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