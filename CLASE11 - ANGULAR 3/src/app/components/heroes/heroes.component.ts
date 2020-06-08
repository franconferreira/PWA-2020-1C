import { HeroesService } from './../../services/heroes.service';
import {HeroesServiceBackend} from './../../services/backend/heroes.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : any = [];
  numero : number = 1.203153;
  constructor(private heroesService : HeroesService, private heroesServiceBack : HeroesServiceBackend) { }
    
  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

}
