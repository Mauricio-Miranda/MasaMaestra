import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasaListComponent } from './masa-list/masa-list.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { MasaQuienesSomosComponent } from './masa-quienes-somos/masa-quienes-somos.component';
import { MasaPedidosComponent } from './masa-pedidos/masa-pedidos.component';
import { InputValorComponent } from './input-valor/input-valor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MasaListComponent,
    CarritoCompraComponent,
    MasaQuienesSomosComponent,
    MasaPedidosComponent,
    InputValorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
