import { Component, OnInit } from '@angular/core';
import { HeroesService , Heroe} from '../../servicios/heroes.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[]=[];

  constructor( private _heroesservice:HeroesService) { 

    console.log("constructor");
  }

  ngOnInit(): void {
    this.heroes=this._heroesservice.getHeroes();
    console.log(this.heroes);
  }

}
