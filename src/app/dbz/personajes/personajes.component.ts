import { Component, Input, OnInit } from '@angular/core';

import { DbzService } from "../services/dbz.services";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})

export class PersonajesComponent {
  
  // @Input() personajes:Personaje[]= [];

  get personajes(){
    return this.DbzService.personajes;
  }
  constructor( private DbzService:DbzService){}

}
