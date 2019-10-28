import Sequelize, { Model } from 'sequelize';

class Cartao extends Model {
  static init(sequelize) {
    super.init(
      {
        cliente_id: Sequelize.INTEGER,
        numero: Sequilize.INTEGER,
        cvv: Sequilize.INTEGER,
        dtvalidade: Sequilize.DATE,
        cpf: Sequelize.CHAR(11),
        bandeira: Sequilize.STRING,
        proprietario: Sequilize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: 'cliente_id', as: 'cliente' });
  }
}

export default Cartao;
