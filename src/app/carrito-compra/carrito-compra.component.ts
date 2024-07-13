import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { maestra } from '../maestra';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.scss']
})
export class CarritoCompraComponent implements OnInit {

  listaDeCompras$!: Observable<maestra[]>;

  constructor(private carrito: CarritoService) { }

  ngOnInit(): void {
    this.listaDeCompras$ = this.carrito.ListaDeCompras.asObservable();
  }

  getTotalGeneral(): number {
    let total = 0;
    this.listaDeCompras$.subscribe(items => {
      items.forEach(item => {
        total += item.precio * item.cant;
      });
    });
    return total;
  }

  comprar(): void {
    
    this.carrito.vaciarCarrito();
  }
}
