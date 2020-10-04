import { Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken';

export class Auth {
    verifyToken(req: Request, res: Response, next: NextFunction) {
        const token: any = req.header('auth-token');
        try {
            jwt.verify(token, process.env.SECRET_KEY as string);
            next();
        } catch (err) {
            res.status(401).send({err})
        }
    }
}