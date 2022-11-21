import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

 // @Input('listaPersonajes') personajes:Personaje[] = [];
 get personajes():Personaje[] {
    return this.dbzService.personajes;
 }

  constructor(private dbzService: DbzService){}
}
