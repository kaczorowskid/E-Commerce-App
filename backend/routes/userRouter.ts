import { Router, Request, Response } from 'express';
import { register, login } from '../database/controllers/user.controller';
import { verifyToken } from './auth';

export const userRouter = Router();
 
userRouter.post('/register', register);
userRouter.post('/login', login);