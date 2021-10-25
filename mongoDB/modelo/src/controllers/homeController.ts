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

   /*

   let usuarios = await User.find({
        age:{$gt: 18}
   }).skip(1).limit(1); // pular e mostrar 

   */




   // gt maior que 
   // gte maior igual 
   // lt menor que  
   // lte menor igual





   // console.log("Usuários: ", usuarios);




   /*
   let newUser = await User.create({
       name:{
           firstName: 'ana',
           lastName: 'nornonha'
       },

       email: 'ana@gmail.com',
       age: 234,
       interests: ['jogos' , 'esportes']

   });


   console.log('Novo usuario:', newUser);

   */




   /*



   let newUser1 = await new User();

   newUser1.name = {
       firstName: "Amoedo",
       lastname: "Caralho" 
   };

   newUser1.age = 56;
   newUser1.email = 'amoedo@gmail.com';
   newUser1.interests = ["eletronica"]


   let resultado = await newUser1.save();


   console.log("Novo usuario1: ", resultado);


   */


   // atualizando vários dados de uma vez


   /*

   await User.updateMany(
       {age: {$gte: 100}},
       {age: 18}
   )

   */



   // atualizando dados de uma só ususario

   /*


   await User.updateOne(
       {email:"rafaeldamasceno2000@gmail.com"},
       {age: 45}
   )

   */


   let user = await User.findOne({email: 'rafaeldamasceno2000@gmail.com'})

   user.name.firstName = 'Raphael';
   await user.save();




   


   


   let users = await User.find({}).sort({"name.firstName": 1});





   res.render('pages/home',{
       users: users
   });




};


export const addUserAction = async(req: Request, res:Response ) =>{

    try{
        let newUser = await User.create({
            name: {
                firstName: req.body.firstName,
                lastName: req.body.lastName
            

            
            },
            email: req.body.email,
            age: parseInt(req.body.age),
            interests: req.body.interests.split(',')
        });

        console.log("usuario adicionado com sucesso");
    }catch(error){

        console.log("usuario nao adiconado", error)

    }


    res.redirect('/');

}
