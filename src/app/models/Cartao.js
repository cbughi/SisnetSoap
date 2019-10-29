import Sequelize, { Model } from 'sequelize';

class Cartao extends Model {
  static init(sequelize) {
    super.init(
      {
        cliente_id: Sequelize.INTEGER,
        numero: Sequelize.INTEGER,
        cvv: Sequelize.INTEGER,
        dtvalidade: Sequelize.DATE,
        cpf: Sequelize.CHAR(11),
        bandeira: Sequelize.STRING,
        proprietario: Sequelize.STRING,
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
