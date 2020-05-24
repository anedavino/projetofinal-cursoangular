import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { VendaComponent } from './venda/venda.component';
import { ClienteManterComponent } from './cliente/cliente-manter/cliente-manter.component';
import { ProdutoManterComponent } from './produto/produto-manter/produto-manter.component';
import { VendaManterComponent } from './venda/venda-manter/venda-manter.component';
import { LayoutComponent } from './layout/layout.component';
import { ProdutoServicoService } from './produto/servico/produto-servico.service';
import { HomeComponent } from './home/home.component';
import { VendaServicoService } from './venda/servico/venda-servico.service';
import { ClienteServicoService } from './cliente/servico/cliente-servico.service';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProdutoComponent,
    VendaComponent,
    ClienteManterComponent,
    ProdutoManterComponent,
    VendaManterComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProdutoServicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
