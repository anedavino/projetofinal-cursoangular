import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteServicoService } from './servico/cliente-servico.service';
import { Cliente } from './servico/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  listaCliente: Cliente [] = [];
  nome:string = '';
  selecionado: Cliente;


  constructor(
    private router: Router,
    private clienteServicoService: ClienteServicoService,
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  

  }

  pesquisar(){
    this.clienteServicoService.pesquisar(this.nome).subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;


      }
    );
  }

  incluir(){
    this.router.navigate(['cliente/incluir']);
  }

  selecionar(cliente){
    this.selecionado = cliente;
  }

  alterarParcial(){
    this.router.navigate(['/cliente/alterar/' + this.selecionado.nome]);
   // console.log(this.selecionado.nome);
  }

  excluir(){
    this.clienteServicoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
        }
      )
    }

}
