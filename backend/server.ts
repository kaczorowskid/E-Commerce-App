import express, {Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './routes/router';

const app = express();
const port = process.env.PORT || 4200;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use('/', router)


app.listen(port, () => console.log(`App listen on port ${port}`));