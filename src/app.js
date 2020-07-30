import express from 'express';
import cors from 'cors';
import routes from './routes';
import './database';

require('dotenv/config');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    const corsOptions = {
      origin: process.env.ALLOW_ORIGIN,
      optionsSuccessStatus: 200,
    };

    this.server.use(express.json());
    this.server.use(cors(corsOptions));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
