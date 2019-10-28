module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cliente', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.CHAR(11),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      dono_id: {
        type: Sequelize.INTEGER,
        references: { model: 'dono', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION',
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
    return queryInterface.dropTable('cliente');
  },
};
