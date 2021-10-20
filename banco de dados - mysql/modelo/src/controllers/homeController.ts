import { Request, Response } from 'express';
import { json } from 'sequelize';


import {Op} from 'sequelize'



import { Product } from '../models/Product';


import { User } from '../models/User'

export const home = async (req: Request, res: Response)=>{



    let users = await User.findAll({
        where: {
           // name: 'rafael',
           /*
            [Op.or]: [
                {age: 18},
                {name: 'rafael'}
            ] */

            /*

            age:{
                //[Op.gt]: 25,// > 25
                //[Op.gte]: 20,// >= 25
                //[Op.lt]: 34, // < 40
               // [Op.between]: [17, 21], // entre 17 e 21

              //  [Op.in]: [20,18], //  pegar estes
               // [Op.notIn]: [34] // negar estes


                
            },

            */

            /*
            name: {
                [Op.like]: 'ra%'
            }

            */

            age:{
                [Op.gte]: 15
            }

           

           
    },
        order: [
           // ['name', 'DESC'] // DECRESCENTE, ASC CRESCENTE
           ['age','DESC']
        ],
        offset: 2,
        limit: 2
    });

    
    //console.log("usuarios,",  JSON.stringify(users));












  
    



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