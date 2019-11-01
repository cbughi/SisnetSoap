module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cobrancas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      pedido_id: {
        type: Sequelize.INTEGER,
        references: { model: 'pedidos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION',
        allowNull: false,
      },
      valor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cartao_id: {
        type: Sequelize.INTEGER,
        references: { model: 'cartao', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION',
        allowNull: false,
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('cobrancas');
  },
};
