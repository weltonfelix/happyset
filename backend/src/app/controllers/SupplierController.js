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

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      latitude: Yup.string().required(),
      longitude: Yup.string().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { id } = req.params;

    const supplier = await Supplier.findByPk(id);

    if (!supplier) {
      return res.status(400).json({ error: 'Supplier already exists' });
    }

    const emailNotAvailable = await Supplier.findOne({
      where: { email: req.body.email },
    });

    if (emailNotAvailable) {
      return res.status(400).json({ error: 'Email not available' });
    }

    const { name, email, latitude, longitude } = await supplier.update(
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
}

export default new SupplierController();
