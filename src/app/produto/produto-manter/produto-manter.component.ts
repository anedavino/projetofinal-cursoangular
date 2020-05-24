import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoServicoService } from './../servico/produto-servico.service';
import { Produto } from './../servico/produto';



@Component({
  selector: 'app-produto-manter',
  templateUrl: './produto-manter.component.html',
  styleUrls: ['./produto-manter.component.scss']
})
export class ProdutoManterComponent implements OnInit {

  
  produto: Produto = new Produto();
  operacao: string = 'Incluir';

  constructor(
    private routeActivated: ActivatedRoute,
    private produtoServicoService: ProdutoServicoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let nome: string = this.routeActivated.snapshot.params.nome;
    if(nome != null){
      this.operacao = 'Alterar';
      this.produtoServicoService.consultar(nome).subscribe(
        data => {
          this.produto = (<Produto[]>data)[0];
        }
      );
    }
  }
  


  incluir(){
    this.produtoServicoService.incluir(this.produto).subscribe(
      retorno => {        
        alert(retorno['mensagem']);
        this.voltar();
      }
    ); 
  }

  voltar(){
    this.router.navigate(['/produto']);
  }

  alterar(){
    this.produtoServicoService.alterarParcial(this.produto).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/produto']);        
      }
    );
  }


}
