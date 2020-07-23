import { Router } from 'express';
import cors from 'cors';
import DeliveryController from './app/controllers/DeliveryController';

const routes = new Router();

routes.use(cors());

routes.get('/delivery', DeliveryController.list);
routes.get('/delivery/:id', DeliveryController.get);

export default routes;
