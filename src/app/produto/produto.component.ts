import { Component, OnInit, NgModule, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoServicoService } from './servico/produto-servico.service';
import { Produto } from './servico/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto();

  listaProduto: Produto [] = [];
  nome:string = '';
  selecionado: Produto;

  constructor(
    private router: Router,
    private produtoServicoService: ProdutoServicoService,
  ) { }

  ngOnInit(): void {
    this.consultar();

  }

  consultar(){
    this.produtoServicoService.consultar(this.nome).subscribe(
      data => {
        this.listaProduto = <Produto[]>data;
        console.log(this.nome);
        
      }
    );
    }
  


  incluir(){
    this.router.navigate(['produto/incluir']);

  }

  selecionar(produto){
    this.selecionado = produto;
  }

  alterar(){
    this.router.navigate(['/produto/alterar/' + this.selecionado.nome]);
  }

  excluir(){
    this.produtoServicoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
        }
      )
    }

}
