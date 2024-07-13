import { Component, Input } from '@angular/core';
import { maestra } from '../maestra';

@Component({
  selector: 'app-input-valor',
  templateUrl: './input-valor.component.html',
  styleUrl: './input-valor.component.scss'
})



export class InputValorComponent {
  
  @Input()
  masa!: maestra;
  

  upQuantity(masa:maestra):void{
    
      masa.cant ++;  
  }

  downQuantity(masa: maestra):void{
    if(masa.cant > 0)
      masa.cant --;  
  }


}
