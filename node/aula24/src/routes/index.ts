import {Router, Request, Response} from 'express'


import * as homeContoller from '../controllers/homeContoller'

import * as infoController from '../controllers/infoController'

import * as userControler from '../controllers/userController'






const router = Router();




router.get('/', homeContoller.home );


router.get('/contato', infoController.contato )


router.get('/sobre',  infoController.sobre)



router.get('/nome', userControler.nome)





router.get('/idade', userControler.idadeForm );



router.post('/idade-resultado', userControler.idadePost )





export default router;