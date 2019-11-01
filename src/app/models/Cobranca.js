import Sequelize, { Model } from 'sequelize';

class Cobranca extends Model {
  static init(sequelize) {
    super.init(
      {
        pedido_id: Sequelize.INTEGER,
        valor: Sequelize.INTEGER,
        cartao_id: Sequelize.INTEGER,
        data: Sequelize.DATE,
        status: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Pedido, { foreignKey: 'pedido_id', as: 'pedido' });
    this.belongsTo(models.Cartao, { foreignKey: 'cartao_id', as: 'cartao' });
  }
}

export default Cobranca;
