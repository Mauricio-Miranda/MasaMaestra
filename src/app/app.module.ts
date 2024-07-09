import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasaListComponent } from './masa-list/masa-list.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    MasaListComponent,
    CarritoCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
