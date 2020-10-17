import { Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token: any = req.header('auth-token');
    try {
        const user: any = jwt.verify(token, process.env.SECRET_KEY as string);
        console.log("user ", user)
        next();
    } catch (err) {
        res.status(401).send({err})
    }
}