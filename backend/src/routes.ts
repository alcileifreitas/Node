import { Router } from  'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import FornecedoresController from './controllers/FornecedoresController';
import ProdutosController from './controllers/ProdutosController';
import ComprasController from './controllers/ProdutosController';

const routes = Router();
const upload = multer(uploadConfig);

//fornecedores
routes.post('/fornecedores', FornecedoresController.create);
routes.get('/fornecedores', FornecedoresController.index);
routes.get('/fornecedores/:id', FornecedoresController.show);

//produtos
routes.post('/produtos', ProdutosController.create);
routes.get('/produtos', ProdutosController.index);
routes.get('/produtos/:id', ProdutosController.show);

//compras
routes.post('/compras', ComprasController.create);
routes.get('/compras', ComprasController.index);
routes.get('/compras/:id', ComprasController.show);

export default routes;