import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import OrderController from './app/controllers/OrderController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/order', OrderController.store);
routes.post('/session', SessionController.store);

export default routes;
