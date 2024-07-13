import { Component } from '@angular/core';
import { maestra } from '../maestra';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-masa-list',
  templateUrl: './masa-list.component.html',
  styleUrl: './masa-list.component.scss'
})
export class MasaListComponent {
  
  
  constructor(private carrito: CarritoService){
    
  }

  masas: maestra[] = [
    {
      tipo: "Jamon y Queso",
      descripcion: "Las tipicas de J y Q",
      precio: 900,
      imagen: "img/jyq.jpeg",
      stock: true,
      promo: false,
      cant: 0,
      
    },

    {
      tipo: "Carne",
      descripcion: "Para comer con las patas abiertas",
      precio: 1100,
      imagen: "img/carne.jpeg",
      stock: true,
      promo: true,
      cant: 0,
      
    },

    {
      tipo: "Pollo",
      descripcion: "Pollo fresco de granja",
      precio: 1000,
      imagen: "img/pollo.jpeg",
      stock: true,
      promo: false,
      cant: 0,
      
    },

    {
      tipo: "Cebolla y Queso",
      descripcion: "Cebollas caramelizadas",
      precio: 900,
      imagen: "img/cebollayq.jpeg",
      stock: true,
      promo: true,
      cant: 0,
      
    },

    {
      tipo: "Palmitos",
      descripcion: "Palmitos en conserva",
      precio: 1100,
      imagen: "img/palmitos.jpeg",
      stock: true,
      promo: false,
      cant: 0,
      
    },

    {
      tipo: "Roquefort",
      descripcion: "El mejor Roque del condado",
      precio: 1200,
      imagen: "img/roquee.jpeg",
      stock: false,
      promo: false,
      cant: 0,
      
    },

    {
      tipo: "Muzza",
      descripcion: "mucha muzza y mucha salsa",
      precio: 9500,
      imagen: "img/muzza.jpeg",
      stock: true,
      promo: true,
      cant: 0,
      
    },

    {
      tipo: "Fugazzeta",
      descripcion: "Cebolla, cebbolla y mas cebolla",
      precio: 9000,
      imagen: "img/fugazeta.jpeg",
      stock: true,
      promo: true,
      cant: 0,
      
    },

    {
      tipo: "La Especial",
      descripcion: "Con de todo",
      precio: 9500,
      imagen: "img/especial.jpeg",
      stock: false,
      promo: true,
      cant: 0,
      
    },

    {
      tipo: "La 4 Cheese",
      descripcion: "Parmesano, Roque, Muzza y Gouda",
      precio: 11000,
      imagen: "img/4q.jpeg",
      stock: true,
      promo: false,
      cant: 0,
      
    },

    {
      tipo: "Primavera",
      descripcion: "Jamon, Huevo y tomates",
      precio: 12000,
      imagen: "img/primavera.jpeg",
      stock: true,
      promo: false,
      cant: 0,
      
    },

    {
      tipo: "pollito Muerto",
      descripcion: "Con Panceta y 8 Huevos fritos",
      precio: 13000,
      imagen: "img/fritos.jpeg",
      stock: true,
      promo: false,
      cant: 0,
      
    }

  ] 
  

  agregarAlCarrito(masa: maestra):void{
    this.carrito.agregarAlCarrito(masa);

  }

}


