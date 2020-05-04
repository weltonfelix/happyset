import * as Yup from 'yup';

import Product from '../models/Product';
import Supplier from '../models/Supplier';

class ProductController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      categories: Yup.string().required(),
      image: Yup.string().required(),
      price: Yup.number().positive().required(),
      amount: Yup.number().integer().min(0).required(),
      supplier_id: Yup.number().integer().positive().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const supplier = await Supplier.findByPk(req.body.supplier_id);

    if (!supplier) {
      return res.status(400).json({ error: 'Supplier does not exists' });
    }
    const {
      id,
      name,
      description,
      categories,
      price,
      amount,
      image,
      supplier_id,
    } = await Product.create(req.body);

    return res.json({
      id,
      name,
      description,
      categories,
      price,
      amount,
      image,
      supplier_id,
    });
  }
}

export default new ProductController();
