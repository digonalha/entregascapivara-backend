import Shipping from '../models/Shipping';

class ShippingController {
  async create(req, res) {
    try {
      const {
        nome_cliente,
        data_entrega,
        ponto_partida,
        ponto_destino,
      } = req.body;

      // validacoes

      const shipping = await Shipping.create({
        nome_cliente,
        data_entrega,
        ponto_partida,
        ponto_destino,
      });
      return res.json(shipping);
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }

  async get(req, res) {
    const { id } = req.params;
    const shipping = await Shipping.findOne({ where: { id } });

    if (shipping) return res.json(shipping);

    return res.status(400).json({ error: `Entrega ${id} nao encontrada` });
  }

  async list(req, res) {
    const { page = 1 } = req.query;
    const { count } = await Shipping.findAndCountAll();

    const shippings = await Shipping.findAll({
      offset: (page - 1) * 5,
      limit: 5,
    });

    res.header('X-Total-Count', count);

    return res.json(shippings);
  }
}

export default new ShippingController();
