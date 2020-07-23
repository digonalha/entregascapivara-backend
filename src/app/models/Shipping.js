import Sequelize, { Model } from 'sequelize';

class Shipping extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_cliente: Sequelize.STRING,
        data_entrega: Sequelize.DATE,
        ponto_partida: Sequelize.STRING,
        ponto_destino: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Shipping;
