import { Router } from 'express';
import DeliveryController from './app/controllers/DeliveryController';

const routes = new Router();

routes.post('/delivery', DeliveryController.create);
routes.get('/delivery', DeliveryController.list);
routes.get('/delivery/:id', DeliveryController.get);
routes.delete('/delivery/:id', DeliveryController.delete);

export default routes;
