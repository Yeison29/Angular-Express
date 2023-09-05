import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba';
  nombre ?: string;
  ban ?: string = "Inactivo";
  ba ?: boolean = false;
  numero = 4;
  color ?: string = "rojo";
  bgColor : string = "bgAzul";

  persona= [
    {
      nombre: 'Josue',
      edad: 21
    },
    {
      nombre: 'Oscar',
      edad: 22
    },
    {
      nombre: 'Yeison',
      edad: 21
    }
  ]

  cambiarTitle() {
    if(this.title=='cambiando') this.title = 'prueba';
    else this.title = 'cambiando';
  }

  cambiarState() {
    if(this.ban=='Activo') this.ban = 'Inactivo';
    else this.ban = 'Activo';
  }

  cambiarState1() {
    this.ba = !this.ba;
  }

  cambiarColor() {
    if(this.color=='rojo'){
      this.color = 'azul';
      this.bgColor = 'bgRojo';
    } 
    else {
      this.color = 'rojo';
      this.bgColor = 'bgAzul';
    }
  }


}