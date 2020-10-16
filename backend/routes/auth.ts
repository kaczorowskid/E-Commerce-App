import { Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token: any = req.header('auth-token');
    try {
        const user: any = jwt.verify(token, process.env.SECRET_KEY as string);
        console.log(user)
        res.status(200).send({
            email: user.email,
            name: user.name,
            surname: user.surname,
            role: user.role
        })
        next();
    } catch (err) {
        res.status(401).send({err})
    }
}