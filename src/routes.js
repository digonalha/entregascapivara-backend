import { Router } from 'express';
import DeliveryController from './app/controllers/DeliveryController';

const routes = new Router();

routes.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    'https://entregas-capivara-frontend.herokuapp.com/'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

routes.post('/delivery', DeliveryController.create);
routes.get('/delivery', DeliveryController.list);
routes.get('/delivery/:id', DeliveryController.get);
routes.delete('/delivery/:id', DeliveryController.delete);

export default routes;
