import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './../../cliente/servico/cliente';
import { Venda } from './venda';

@Injectable({
  providedIn: 'root'
})
export class VendaServicoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  consultar(codigo: string){
    return this.httpClient.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/consultar/" + codigo);
     }

  incluir(venda:Venda){
    return this.httpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/incluir", venda);
  }

  alterarParcial(venda:Venda){
    return this.httpClient.patch("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/alterarparcial", venda);
  }

  remover(venda:Venda){
    return this.httpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/remover", venda);
  }


}
