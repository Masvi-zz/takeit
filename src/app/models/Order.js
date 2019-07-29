import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.STRING,
        status: Sequelize.STRING,
        amount: Sequelize.INTEGER,
        user_id: Sequelize.INTEGER,
        take_by: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Order;
