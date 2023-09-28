import { Router } from "express";
import authController from "../controllers/user.controller";

class UserRouter {
    
    router: Router;

    constructor(){
        this.router = Router();
        this.config();
    }

    private config(){
        this.router.route('/login').post(authController.login);
        this.router.route('/register').post(authController.register);
    }
}

export default new UserRouter;