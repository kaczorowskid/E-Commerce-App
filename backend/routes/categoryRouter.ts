import { Router } from 'express';
import { CategoryController } from '../database/controllers/category.controller';

export class CategoryRouter {
    public router: Router = Router();
    private Category: CategoryController = new CategoryController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/category', this.Category.getCategory)
    }
}