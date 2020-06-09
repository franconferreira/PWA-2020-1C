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
  // singleton
  constructor(private heroesServiceBack : HeroesServiceBackend) { }
    
  async ngOnInit() {
    await this.getAllHeroes();
  }

  async getAllHeroes() {
    let result : any = await this.heroesServiceBack.getAll();
    this.heroes = result.heroes;
  }

}
