import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : any = [];
  numero : number = 1.203153;
  constructor(private heroesService : HeroesService) { }
    
  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

}
