import { Router } from 'express';
import cors from 'cors';
import ShippingController from './app/controllers/ShippingController';

const routes = new Router();

routes.use(cors());

routes.post('/delivery', ShippingController.create);
routes.get('/delivery', ShippingController.list);
routes.get('/delivery/:id', ShippingController.get);

export default routes;
