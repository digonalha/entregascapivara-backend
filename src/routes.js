import { Router } from 'express';
import cors from 'cors';
import ShippingController from './app/controllers/ShippingController';

const routes = new Router();

routes.use(cors());

routes.post('/shipping', ShippingController.create);
routes.get('/shipping', ShippingController.list);
routes.get('/shipping/:id', ShippingController.get);

export default routes;
