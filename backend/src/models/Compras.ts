import { Entity, Column, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import Fornecedores from './Fornecedores';
import Produtos from './Produtos';

@Entity('compras')
export default class Compras {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    dataEmissao: string;

    @Column()
    quantidade: number;

    @Column()
    valorUnitario: number;

    @JoinColumn({ name: 'produto_id' })
    produto_id: Produtos[];

    @JoinColumn({ name: 'fornecedor_id' })
    fornecedor_id: Fornecedores[];
}