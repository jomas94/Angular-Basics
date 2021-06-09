import { Component, EventEmitter, Input, Output } from '@angular/core';
// import * as EventEmitter from 'events';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent  {

  
  @Input() nuevo:Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzService: DbzService ){

  }
  // @Output() onNuevoPersonaje:EventEmitter<Personaje>  = new EventEmitter();

  agregar( ){
    if( this.nuevo.nombre.trim().length === 0){
      return;
    }
    
    console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonje(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    
  }
}
