import express, { Request, Response, Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import { UserRouter } from './routes/router';

class Server {
    public app: Application;
    public userRouter: UserRouter = new UserRouter();
    private port = process.env.PORT || 4200;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(morgan("dev"));
    }

    routes() {
        this.app.use("/", this.userRouter.router);
    }

    run() {
        this.app.listen(this.port, () => console.log(`App listen on port ${this.port}`))
    }
}

const server = new Server();
server.run();