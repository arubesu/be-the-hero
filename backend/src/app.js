import 'dotenv/config';

import express from 'express';
import routes from './routes';
import cors from 'cors';
import { errors } from 'celebrate';

import './database/connection'

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(errors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;