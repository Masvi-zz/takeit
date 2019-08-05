import { Router } from 'express';
import authMiddleware from './app/middleware/auth';

import UserController from './app/controllers/UserController';
import HouseController from './app/controllers/HouseController';
import OrderController from './app/controllers/OrderController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.post('/house', HouseController.store);
routes.post('/order', OrderController.store);

export default routes;
