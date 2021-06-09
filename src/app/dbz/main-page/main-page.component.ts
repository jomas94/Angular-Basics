import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

 personajes:Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000

    },
    {
      nombre: 'Vegeta',
      poder: 12000
    }
];

nuevo:Personaje = {
  nombre:'Kakashi',
  poder: 1000
}

 

}
