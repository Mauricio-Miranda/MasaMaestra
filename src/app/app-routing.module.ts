import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasaQuienesSomosComponent } from './masa-quienes-somos/masa-quienes-somos.component';
import { MasaPedidosComponent } from './masa-pedidos/masa-pedidos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pedidos',
    pathMatch: 'full'
  },
  {
    path: 'pedidos',
    component : MasaPedidosComponent
  },
  {
    path: 'quienessomos',
    component: MasaQuienesSomosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
