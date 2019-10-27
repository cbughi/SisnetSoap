import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// models
import Dono from '../app/models/Dono';
import Cliente from '../app/models/Cliente';

const models = [Dono, Cliente];

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
