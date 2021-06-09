import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  nuevo:Personaje = {
    nombre:'Kakashi',
    poder: 1000
  }

  constructor( private DbzService:DbzService){}

}
