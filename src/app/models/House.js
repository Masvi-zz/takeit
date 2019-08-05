import Sequelize, { Model } from 'sequelize';

class House extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        user_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default House;
