module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('house_user', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        preferences: { model: 'User', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      home_id: {
        type: Sequelize.INTEGER,
        preferences: { model: 'Home', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('house_user');
  },
};
