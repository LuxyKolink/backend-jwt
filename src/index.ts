import userRouter from "./routes/user.router";
import express from "express";
import dotenv from "dotenv";
import path from "path";
import mongoDb from "./database/mongo.db";

class App {
    #app: express.Express

    constructor(){
      this.#app = express();
      this.#config();
      this.#routes();
      this.#start();
    }

    #config = (): void => {
        dotenv.config({
            path: path.join(__dirname, '../config/.env.development')
        });
        new mongoDb().connect();
        this.#app.use(express.json());
    }

    #routes = (): void => {
        this.#app.use('/', userRouter.router)
    }

    #start = (): void => {
        this.#app.listen(process.env.API_PORT, () => {
            const port = (process.env.API_PORT != null) ? process.env.API_PORT : 'undefined'
            const host = (process.env.API_HOST !== undefined) ? process.env.API_HOST : 'undefined'
            console.info(`SERVER: http://${host}:${port}`)
        })
    }
}

new App();