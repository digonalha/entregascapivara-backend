class DeliveryController {
  async create(req, res) {
    return res.json();
  }

  async get(req, res) {
    return res.json({ endpoint: 'get' });
  }

  async list(req, res) {
    return res.json({ endpoint: 'list' });
  }
}

export default new DeliveryController();
