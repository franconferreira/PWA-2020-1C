import { HeroesServiceBackend } from './../../services/backend/heroes.service';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  id_heroe : any;
  heroe : any = {}; 
  constructor(
    private activatedRoute : ActivatedRoute,
    private heroesBackService : HeroesServiceBackend
    ) {}

  async ngOnInit(){
    this.id_heroe = this.activatedRoute.snapshot.params.id;
    console.log(`Se buscará el heroe con id : ${this.id_heroe}`)
    await this.getHeroe(this.id_heroe);
  }

  async getHeroe(id) {
    let result : any = await this.heroesBackService.getSingle(id);
    console.log(result)
    this.heroe = result.heroe;
  }

}
