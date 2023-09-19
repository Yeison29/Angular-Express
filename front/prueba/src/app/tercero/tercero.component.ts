import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.component.html',
  styleUrls: ['./tercero.component.scss']
})
export class TerceroComponent {

  constructor( private fb : FormBuilder){}

  get nombre (){
    return this.formulario.get("nombre") as FormControl;
  }

  formulario = this.fb.group({
    nombre: ["",[Validators.required]],
    valor: ["",[Validators.required , Validators.pattern(/^[0-9]+$/)]]
  })

  /* formulario = new FormGroup({
    nombre : new FormControl("",[Validators.required]),
    valor : new FormControl("",[Validators.required , Validators.pattern(/^[0-9]+$/)])
  }); */
  
/*   nombre = new FormControl("",[ Validators.required]);
  valor = new FormControl("",[ Validators.required , Validators.pattern(/^[0-9]+$/)]);
 */

  enviar(){
    console.log(this.formulario)
  }
}
