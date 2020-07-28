import Sequelize from 'sequelize';
import Delivery from '../app/models/Delivery';
import config from '../config/database';

const models = [Delivery];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(config);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
