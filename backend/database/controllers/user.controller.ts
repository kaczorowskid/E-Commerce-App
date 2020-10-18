import dotenv from 'dotenv';
dotenv.config();

import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import { EUser } from '../models/User';


export const register = async(req: Request, res: Response) => {
    const { name, email, password, role, birthdate } = req.body;

    const hashPassword: string = await bcrypt.hash(password, 10);
    const userExist: number = await User.count({ where: { email: email } })

    console.log(birthdate)

    if (!userExist) {
        await User.create({
            name,
            email,
            password: hashPassword,
            role: EUser.User,
            birthdate: new Date(birthdate),
            createaccount: new Date()
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
    }, process.env.SECRET_KEY as string);

    await bcrypt.compare(password, user.password) ?
        res.header('auth-token', token).send({ }) :
        res.status(401).send({ msg: 'brak dostępu' });
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const token: any = req.header('auth-token');
    try {
        const userData: any = jwt.verify(token, process.env.SECRET_KEY as string);
        const user: any = await User.findAll({
            where: {
                id: userData.id
            }
        })
        
        const data = user[0].dataValues;

        res.status(200).json({
            ...data
        })
    } catch (err) {
        res.status(401).send({err})
    }
}

export const userUpdateName = async (req: Request, res: Response, next: NextFunction) => {
    const { email, inputData } = req.body;

    try {
        await User.update(
            {name: inputData},
            {where: {email: email}}
        )
        res.status(200).send({msg: 'succes'});
    } catch(err) {
        res.status(404).send(err)
    }
}

export const userUpdatePhoneNumber = async (req: Request, res: Response, next: NextFunction) => {
    const { email, inputData } = req.body;

    try {
        await User.update(
            {telefonnumber: inputData},
            {where: {email: email}}
        )
        res.status(200).send({msg: 'succes'})
    } catch(err) {
        res.status(404).send(err)
    }
}

export const userUpdateMyAddress = async (req: Request, res: Response, next: NextFunction) => {
    const { email, address, postcode, voivodeship, country } = req.body;

    try {
        await User.update(
            {
                myaddressstreet: address,
                myaddresspostcode: postcode,
                myaddressvoivodeship: voivodeship,
                myaddresscountry: country
            },
            {where: {email: email}}
        )
        res.status(200).send({msg: 'succes'})
    } catch(err) {
        res.status(404).send(err)
    }
}

export const userUpdateShippingAddress = async (req: Request, res: Response, next: NextFunction) => {
    const { email, name, address, postcode, voivodeship, country } = req.body;

    try {
        await User.update(
            {
                shippingaddressname: name,
                shippingaddressstreet: address,
                shippingaddresspostcode: postcode,
                shippingaddressvoivodeship: voivodeship,
                shippingaddresscountry: country
            },
            {where: {email: email}}
        )
        
        res.status(200).send({msg: 'succes'})
    } catch(err) {
        res.status(404).send(err)
    }
}