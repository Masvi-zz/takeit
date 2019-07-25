import Sequelize from 'sequelize';
import databaseconfig from '../config/database';

import User from '../app/models/User';
import Order from '../app/models/Order';

const models = [User, Order];

// import in app.js
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseconfig);
    models.map(model => model.init(this.connection));
  }
}
export default new Database();
