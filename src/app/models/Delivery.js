import Sequelize, { Model } from 'sequelize';

class Delivery extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING,
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

export default Delivery;
