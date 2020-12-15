// import { Request, Response } from 'express';
// import { getRepository } from 'typeorm';
// import Compras from '../models/Compras';
// import Fornecedores from '../models/Fornecedores';
// import Produtos from '../models/Produtos';


// export default {
//     async index(request: Request, response: Response) {

//         const comprasRepository = getRepository(Compras);

//         const compras = await comprasRepository.find();
//             //{}condicao
//         return response.json(compras);
//     },

//     async show(request: Request, response: Response) {

//         const { id } = request.params;
        
//         const comprasRepository = getRepository(Compras);

//         const compra = await comprasRepository.findOneOrFail(id);
//         return response.json(compra);
//     },

//     async create (request: Request, response: Response) {
//         console.log(request.files);

//         const {
//             dataEmissao,
//             quantidade,
//             valorUnitario,
//             // produto_id,
//             // fornecedor_id,
//         } = request.body;
    
//         const comprasRepository = getRepository(Compras);

//         const requestProdutos = request.files as Express.Multer.File[];
//         const produto_id = requestProdutos.map(produto => {
//             return { nomeFornecedor: produto.filename }
//         })

//         const requestFornecedores = request.files as Express.Multer.File[];
//         const fornecedor_id = requestFornecedores.map(fornecedor => {
//             return { nomeFornecedor: fornecedor.filename }
//         })


//         const compras = comprasRepository.create({
//             dataEmissao,
//             quantidade,
//             valorUnitario,
//             produto_id,
//             fornecedor_id,
//         });
    
//         await comprasRepository.save(compras);
    
//         return response.status(201).json(compras);
//     }
// }
