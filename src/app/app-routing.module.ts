import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VendaManterComponent } from './venda/venda-manter/venda-manter.component';
import { VendaComponent } from './venda/venda.component';
import { ClienteManterComponent } from './cliente/cliente-manter/cliente-manter.component';
import { ClienteComponent } from './cliente/cliente.component';
import { Cliente } from './cliente/servico/cliente';
import { ProdutoManterComponent } from './produto/produto-manter/produto-manter.component';
import { ProdutoComponent } from './produto/produto.component';
import { Produto } from './produto/servico/produto';


const routes: Routes = [
  {
    path: '',    
    component: HomeComponent,
    pathMatch: 'full'
  },
  {     
    path: 'produto',
    component: ProdutoComponent,
    pathMatch: 'full'
    },  
  //inicio rota produto
  {     
    path: 'produto',
    component: ProdutoComponent,
    pathMatch: 'full'
    },
    {
    path: 'produto/incluir',
    component: ProdutoManterComponent,
    pathMatch: 'full'
    },
    {
    path: 'produto/alterar/:nome',
    component: ProdutoManterComponent,
    pathMatch: 'full'
    },
    //fim rota produto
    //inicio rota cliente
    {
    path: 'cliente',
    component: ClienteComponent,
    pathMatch: 'full'
    },
    {
    path: 'cliente/incluir',
    component: ClienteManterComponent,
    pathMatch: 'full'
    },
    {
    path: 'cliente/alterar/:nome',
    component: ClienteManterComponent,
    pathMatch: 'full'
    },
    //fim rota cliente
    //inicio rota venda
    {
    path: 'venda',
    component: VendaComponent,
    pathMatch: 'full'
    },
    {
    path: 'venda/incluir',
    component: VendaManterComponent,
    pathMatch: 'full'
    },
    {
      path: 'venda/alterar/:nome',
      component: VendaManterComponent,
      pathMatch: 'full'
    },  
    //fim rota venda
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
