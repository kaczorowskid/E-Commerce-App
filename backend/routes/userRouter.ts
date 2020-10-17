import { Router, Request, Response } from 'express';
import { register, login, getUser, userUpdateName, userUpdatePhoneNumber } from '../database/controllers/user.controller';
import { verifyToken } from './auth';

export const userRouter = Router();
 
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/get-user', verifyToken, getUser);
userRouter.put('/name-edit', verifyToken, userUpdateName);
userRouter.put('/telefonNumber-edit', verifyToken,  userUpdatePhoneNumber)