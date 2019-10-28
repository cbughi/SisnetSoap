import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// models
import Dono from '../app/models/Dono';
import Cliente from '../app/models/Cliente';
import Endereco from '../app/models/Endereco';
import Pedido from '../app/models/Pedido';
import Produto from '../app/models/Produto';
import Produto_pedido from '../app/models/Produto_pedido';
import Cartao from '../app/models/Cartao';

const models = [Dono, Cliente, Endereco, Pedido, Produto, Produto_pedido, Cartao];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
