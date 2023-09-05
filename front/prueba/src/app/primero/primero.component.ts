import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit, OnChanges {
  @Input() nombre : string = '';

  ngOnChanges(){
    console.log("Changes")
  }

  ngOnInit(){
    console.log(this.nombre);
    // console.log("Init");
  }
}
