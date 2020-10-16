import dotenv from 'dotenv';
dotenv.config();

import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';


export const register = async(req: Request, res: Response) => {
    const { name, surname, email, password, role } = req.body;

    const hashPassword: string = await bcrypt.hash(password, 10);
    const userExist: number = await User.count({ where: { email: email } })

    if (!userExist) {
        await User.create({
            name: name,
            surname: surname,
            email: email,
            password: hashPassword,
            role: role
        })
        res.status(200).send({ msg: 'user created' });
    }
    else {
        res.status(401).send({ msg: 'Adres e-mail jest już w naszej bazie danych' })
    }

}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);

    const user: any = await User.findOne({ where: { email: email } })
    if (user === null)  res.status(401).send({ msg: 'brak usera' });

    const token = jwt.sign({ 
        id: user.id,
        email: user.email,
        name: user.name,
        surname: user.surname,
        role: user.role
    }, process.env.SECRET_KEY as string);

    await bcrypt.compare(password, user.password) ?
        res.header('auth-token', token).send({ }) :
        res.status(401).send({ msg: 'brak dostępu' });
}

export const getUser = (req: Request, res: Response, next: NextFunction) => {
    const token: any = req.body.token;
    console.log("token ", token)
    try {
        const user: any = jwt.verify(token, process.env.SECRET_KEY as string);
        console.log(user)
        res.status(200).send({
            email: user.email,
            name: user.name,
            surname: user.surname,
            role: user.role
        })
    } catch (err) {
        res.status(401).send({err})
    }
}
