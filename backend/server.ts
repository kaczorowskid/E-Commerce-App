import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import { userRouter } from './routes/userRouter';
import { categoryRouter } from './routes/categoryRouter';
 
const app = express();
const port = process.env.PORT || 4200;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use('/category', categoryRouter);

app.listen(port, () => console.log(`App listen on port ${port}`));