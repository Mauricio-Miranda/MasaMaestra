import { Component } from '@angular/core';
import { maestra } from '../maestra';

@Component({
  selector: 'app-masa-list',
  templateUrl: './masa-list.component.html',
  styleUrl: './masa-list.component.scss'
})
export class MasaListComponent {

  masas: maestra[] = [
    {
      tipo: "Jamon y Queso",
      descripcion: "Las tipicas de J y Q",
      precio: 900,
      imagen: "img/jyq.jpeg",
      stock: true,
      promo: false,
    },

    {
      tipo: "Carne",
      descripcion: "Para comer con las patas abiertas",
      precio: 1100,
      imagen: "img/jyq.jpeg",
      stock: true,
      promo: true,
    },

    {
      tipo: "Pollo",
      descripcion: "Pollo fresco de granja",
      precio: 1000,
      imagen: "img/jyq.jpeg",
      stock: true,
      promo: false,
    },

    {
      tipo: "Caprese",
      descripcion: "Con tomates frescos del huerto",
      precio: 900,
      imagen: "img/jyq.jpeg",
      stock: false,
      promo: false,
    }

  ] 

}
