import { Router } from "express";
// import customersController from "../controller/userController";
import usersController from "../controller/userController";
// import login from "../controller/loginController";
import loginController from "../authentication/loginController";


const router = new Router()



//1.view data
router.get('/users',usersController.getUser)

//2. create
router.post('/users',usersController.CreateUsers);

//3.login
router.post('/login',loginController.login)

//4. cek token
router.get('/users/sql',loginController.checkToken,usersController.getUser)


export default router