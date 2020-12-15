import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Fornecedores from '../models/Fornecedores';

export default {
    async index(request: Request, response: Response) {

        const fornecedoresRepository = getRepository(Fornecedores);

        const fornecedores = await fornecedoresRepository.find();
            //{}condicao
        return response.json(fornecedores);
    },

    async show(request: Request, response: Response) {

        const { id } = request.params;
        
        const fornecedoresRepository = getRepository(Fornecedores);

        const fornecedor = await fornecedoresRepository.findOneOrFail(id);
        return response.json(fornecedor);
    },

    async create (request: Request, response: Response) {
        const {
            nomeFornecedor,
            telefoneFornecedor,
            emailFornecedor,
        } = request.body;
    
        const fornecedoresRepository = getRepository(Fornecedores);

        const fornecedores = fornecedoresRepository.create({
            nomeFornecedor,
            telefoneFornecedor,
            emailFornecedor,
        });
    
        await fornecedoresRepository.save(fornecedores);
    
        return response.status(201).json(fornecedores);
    }
}
