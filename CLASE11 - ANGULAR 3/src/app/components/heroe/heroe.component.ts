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
  // DRY :
  heroe : any = {}; 
  constructor(
    private activatedRoute : ActivatedRoute,
    private heroesService : HeroesService
    ) {}

  ngOnInit(){
    this.id_heroe = this.activatedRoute.snapshot.params.id;
    console.log(`Se buscará el heroe con id : ${this.id_heroe}`)
    this.heroe = this.heroesService.getHeroe(this.id_heroe);
    console.log(this.heroe)
  }

}
