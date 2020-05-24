import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoServicoService } from './../../produto/servico/produto-servico.service';
import { ClienteServicoService } from './../../cliente/servico/cliente-servico.service';
import { VendaServicoService } from './../servico/venda-servico.service';
import { Produto } from './../../produto/servico/produto';
import { Cliente } from './../../cliente/servico/cliente';
import { VendaProduto } from './../servico/vendaProduto';
import { Venda } from './../servico/venda';

@Component({
  selector: 'app-venda-manter',
  templateUrl: './venda-manter.component.html',
  styleUrls: ['./venda-manter.component.scss']
})
export class VendaManterComponent implements OnInit {

  operacao: string = 'Incluir';
  venda: Venda = new Venda();
  vendaProduto: VendaProduto = new VendaProduto();

  listaCliente: Cliente[] = [];
  listaProduto: Produto[] = [];

  constructor(
    private router: Router,
    private vendaServicoService: VendaServicoService,
    private clienteServicoService: ClienteServicoService,
    private produtoServicoService: ProdutoServicoService
  ) { }

  ngOnInit(): void {
    this.clienteServicoService.pesquisar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );
    
    this.produtoServicoService.consultar('').subscribe(
      data => {
        this.listaProduto = <Produto[]>data;
      }
    );
  }

  voltar(){
    this.router.navigate(['/venda']);
  }

  incluir(){
    this.vendaServicoService.incluir(this.venda).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/venda']);        
      }
    );
  }
  
  adicionar(){

    this.venda.listaVendaProduto.push(this.vendaProduto);
    this.vendaProduto = new VendaProduto();
    console.log(this.vendaProduto);

  }

  removerProduto(vendaProduto){

    this.venda.listaVendaProduto = this.venda.listaVendaProduto.filter(obj => obj !== vendaProduto);

  } 


}
