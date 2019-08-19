import Sequelize, { Model } from 'sequelize';

class House extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        created_by: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    House.associate = models => {
      this.belongsTo(models.User, {
        through: 'house_user',
        as: 'houseuser',
        foreignKey: 'user_id',
      });
    };
  }
}

export default House;
