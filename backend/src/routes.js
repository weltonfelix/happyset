import { Router } from 'express';

import SupplierController from './app/controllers/SupplierController';
import ProductController from './app/controllers/ProductController';
import HappySetController from './app/controllers/HappySetController';

const routes = new Router();

routes.post('/suppliers', SupplierController.store);
routes.get('/suppliers', SupplierController.index);
routes.put('/suppliers/:id', SupplierController.update);

routes.post('/products', ProductController.store);

routes.post('/happysets', HappySetController.store);
routes.get('/happysets/:mainProduct_id', HappySetController.index);

export default routes;
