import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteServicoService } from './../servico/cliente-servico.service';
import { Cliente } from './../servico/cliente';

@Component({
  selector: 'app-cliente-manter',
  templateUrl: './cliente-manter.component.html',
  styleUrls: ['./cliente-manter.component.scss']
})
export class ClienteManterComponent implements OnInit {


  cliente: Cliente = new Cliente();
  operacao: string = 'Incluir';

  constructor(
    private routeActivated: ActivatedRoute,
    private clienteServicoService: ClienteServicoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let nome: string = this.routeActivated.snapshot.params.nome;
    if(nome != null){
      this.operacao = 'Alterar';
      this.clienteServicoService.pesquisar(nome).subscribe(
        data => {
          this.cliente = (<Cliente[]>data)[0];
        }
      );
    }
  }


  incluir(){
    this.clienteServicoService.incluir(this.cliente).subscribe(
      retorno => {        
        alert(retorno['mensagem']);
        this.voltar();
      }
    ); 
  }

  voltar(){
    this.router.navigate(['/cliente']);
  }

  alterar(){
    this.clienteServicoService.alterarParcial(this.cliente).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/cliente']);        
      }
    );
  }

}
