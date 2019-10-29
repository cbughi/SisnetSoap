import Sequelize, { Model } from 'sequelize';

class Produto_pedido extends Model {
  static init(sequelize) {
    super.init(
      {
        produto_id: Sequelize.INTEGER,
        pedido_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Produto, { foreignKey: 'produto_id', as: 'produto' });
    this.belongsTo(models.Pedido, { foreignKey: 'pedido_id', as: 'pedido' });
  }
}

export default Produto_pedido;
