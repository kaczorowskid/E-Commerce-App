import { Router } from 'express';
import { getCategory } from '../database/controllers/category.controller';

export const categoryRouter = Router();

categoryRouter.get('/category', getCategory)
