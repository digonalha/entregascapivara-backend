module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('deliveries', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome_cliente: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_entrega: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      ponto_partida: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ponto_destino: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('deliveries');
  },
};
