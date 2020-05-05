// import HappySet from '../models/HappySet';
import Product from '../models/Product';
import HappySet from '../models/HappySet';

class HappySetController {
  async store(req, res) {
    const {
      mainProduct_id,
      product_1_id,
      product_2_id,
      product_3_id,
    } = req.body;

    const mainProduct = await Product.findByPk(mainProduct_id);
    const product_1 = await Product.findByPk(product_1_id);
    const product_2 = await Product.findByPk(product_2_id);
    const product_3 = await Product.findByPk(product_3_id);

    if (!mainProduct) {
      return res.status(400).json({ error: 'Main Product does not exists' });
    }

    if (!product_1) {
      return res.status(400).json({ error: 'Product 1 does not exists' });
    }

    if (!product_2) {
      return res.status(400).json({ error: 'Product 2 does not exists' });
    }

    if (!product_3) {
      return res.status(400).json({ error: 'Product 3 does not exists' });
    }

    /**
    const mainProduct_categories = mainProduct.categories
      .split(',')
      .map((category) => category.trim());

    const products = await Product.findAll({
      attributes: ['id', 'categories'],
    });

    let products_categories = {};
    products.forEach((product) => {
      const product_id = product.id;

      const product_categories = product.categories
        .split(',')
        .map((category) => category.trim());

      products_categories = {
        ...products_categories,
        [product_id]: product_categories,
      };
    });

    console.log(products_categories);

    const products_count = 0;

    while (products_count < 2) {
      products_categories.forEach((product) => product.map(

      ));
    }

    return res.send(mainProduct_categories);
     */

    const happySet = await HappySet.create({
      main_product: mainProduct_id,
      product_01: product_1_id,
      product_02: product_2_id,
      product_03: product_3_id,
    });

    return res.json(happySet);
  }

  async index(req, res) {
    const { mainProduct_id } = req.params;

    const happysets = await HappySet.findAll({
      where: { main_product: mainProduct_id },
      attributes: [
        'id',
        'main_product',
        'product_01',
        'product_02',
        'product_03',
      ],
      include: [
        {
          model: Product,
          as: 'main_product_id',
          attributes: [
            'id',
            'name',
            'description',
            'categories',
            'price',
            'image',
          ],
        },
        {
          model: Product,
          as: 'product_01_id',
          attributes: [
            'id',
            'name',
            'description',
            'categories',
            'price',
            'image',
          ],
        },
        {
          model: Product,
          as: 'product_02_id',
          attributes: [
            'id',
            'name',
            'description',
            'categories',
            'price',
            'image',
          ],
        },
        {
          model: Product,
          as: 'product_03_id',
          attributes: [
            'id',
            'name',
            'description',
            'categories',
            'price',
            'image',
          ],
        },
      ],
    });

    return res.json(happysets);
  }
}

export default new HappySetController();
