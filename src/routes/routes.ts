import { Router } from 'express';
import { container } from 'tsyringe';

import { UserController } from '../controllers/user.controller';

const routes = Router();

const userController = container.resolve(UserController);

routes.get('/user', async (req, res) => {
    console.log('test');
    userController.login();
});

export { routes };