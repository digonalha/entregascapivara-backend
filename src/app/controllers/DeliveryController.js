import Delivery from '../models/Delivery';

class DeliveryController {
  async create(req, res) {
    try {
      const {
        nome_cliente,
        data_entrega,
        ponto_partida,
        ponto_destino,
      } = req.body;

      // validacoes

      const delivery = await Delivery.create({
        nome_cliente,
        data_entrega,
        ponto_partida,
        ponto_destino,
      });
      return res.json(delivery);
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }

  async get(req, res) {
    const { id } = req.params;
    const delivery = await Delivery.findOne({ where: { id } });

    if (delivery) return res.json(delivery);

    return res.status(400).json({ error: `Entrega ${id} nao encontrada` });
  }

  async delete(req, res) {
    const { id } = req.params;
    const book = await Delivery.findOne({ where: { id } });

    if (book === null) return res.status(400).json({ error: 'Bad request' });

    await book.destroy();

    return res.status(204).send();
  }

  async list(req, res) {
    const { page = 1 } = req.query;
    const { count } = await Delivery.findAndCountAll();

    const delivery = await Delivery.findAll({
      offset: (page - 1) * 20,
      limit: 20,
    });

    res.header('X-Total-Count', count);

    return res.json(delivery);
  }
}

export default new DeliveryController();
