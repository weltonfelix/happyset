import * as Yup from 'yup';

import Supplier from '../models/Supplier';

class SupplierController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      latitude: Yup.string().required(),
      longitude: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const supplierExists = await Supplier.findOne({
      where: { email: req.body.email },
    });

    if (supplierExists) {
      return res.status(400).json({ error: 'Supplier already exists' });
    }

    const { id, name, email, latitude, longitude } = await Supplier.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      latitude,
      longitude,
    });
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const suppliers = await Supplier.findAll({
      order: ['id'],
      attributes: ['id', 'name', 'email', 'latitude', 'longitude'],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(suppliers);
  }
}

export default new SupplierController();
