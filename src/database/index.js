import Sequelize from 'sequelize';
import Shipping from '../app/models/Shipping';
import config from '../config/database';

const models = [Shipping];

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
