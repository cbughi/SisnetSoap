/* eslint-disable no-param-reassign */
import { Model, Sequelize } from 'sequelize';
import bcrypt from 'bcryptjs';

class Dono extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        token: Sequelize.CHAR(8),
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async dono => {
      dono.token = await bcrypt.hash(dono.nome + new Date(), 8);
    });

    return this;
  }
}

export default Dono;
