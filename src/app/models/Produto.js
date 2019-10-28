import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        valor: Sequelize.INTEGER,
        nome: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Produto;
