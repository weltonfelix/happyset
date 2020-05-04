import { Router } from 'express';

import SupplierController from './app/controllers/SupplierController';

const routes = new Router();

routes.post('/suppliers', SupplierController.store);
routes.get('/suppliers', SupplierController.index);

export default routes;
