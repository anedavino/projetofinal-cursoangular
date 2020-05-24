import { VendaProduto } from './vendaProduto';
import { Cliente } from './../../cliente/servico/cliente';


export class Venda{
        codigo: number;
        cliente: Cliente;
        listaVendaProduto: VendaProduto[] = [];
    
}

