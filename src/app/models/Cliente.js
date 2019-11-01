import Sequelize, { Model } from 'sequelize';

class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cpf: Sequelize.CHAR(11),
        email: Sequelize.STRING,
        dono_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Dono, { foreignKey: 'dono_id', as: 'dono' });
  }
}

export default Cliente;
