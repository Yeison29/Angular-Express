import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.scss']
})

export class SegundoComponent {

  formulario = {
    nombre: '',
    valor: 0
  }

  enviar(){
    console.log(this.formulario);
  }

}
