import { Injectable } from '@angular/core';
import { maestra } from './maestra';
import { BehaviorSubject } from 'rxjs';

/*
 * Maneja la logica del carrito de compras
 */

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  

  private _ListaDeCompras: maestra[] = [];
  ListaDeCompras: BehaviorSubject< maestra[]> = new BehaviorSubject(this._ListaDeCompras); 
 
  
  

  constructor() { }

  agregarAlCarrito(masa: maestra) {

    
    let producto = this._ListaDeCompras.find(elemento => elemento.tipo == masa.tipo);


    if(!producto){
      this._ListaDeCompras.push({...masa});
    }else{
      producto.cant += masa.cant;
    }  

    console.log(this._ListaDeCompras);
    this.ListaDeCompras.next(this._ListaDeCompras);
  }

  vaciarCarrito(): void {
    this._ListaDeCompras = [];
    this.ListaDeCompras.next(this._ListaDeCompras);
  }

  
}
