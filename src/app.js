import express from 'express';
import routes from './routes';
import cors from 'cors'; 
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    var corsOptions = {
      origin: 'entregas-capivara-frontend.herokuapp.com',
      optionsSuccessStatus: 200
    }
    
    this.server.use(express.json());
    this.server.use(cors(corsOptions));
  }
  


  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
