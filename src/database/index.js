import Sequelize from 'sequelize';
import Databaseconfig from '../config/database';

import User from '../app/models/User';
import Order from '../app/models/Order';
import House from '../app/models/House';

const models = [User, Order, House];

// import in app.js
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(Databaseconfig);
    models.map(model => model.init(this.connection));
  }
}
export default new Database();
