import { SwalService } from './../../services/common/swal.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HeroesServiceBackend} from './../../services/backend/heroes.service';
@Component({
  selector: 'app-nuevo-heroe',
  templateUrl: './nuevo-heroe.component.html',
  styleUrls: ['./nuevo-heroe.component.css']
})
export class NuevoHeroeComponent implements OnInit {
  form : FormGroup;
  isLoaded : boolean;
  reason : string;
  message : string = "";
  /** Objeto heroe generico */
  heroeObject : any = {nombre : '',bio:'', casa:'',aparicion : ''}
  heroe : any = {};
  constructor(private heroesServiceBack : HeroesServiceBackend,
              private activatedRoute : ActivatedRoute,
              private swalService : SwalService) { }

  createForm(obj) {
    this.isLoaded = false;
    this.form = new FormGroup({
      nombre :new FormControl(obj.nombre,[Validators.required,Validators.minLength(2)]),
      bio : new FormControl(obj.bio,[Validators.required]),
      casa: new FormControl(obj.casa,Validators.required),
      aparicion : new FormControl(obj.aparicion,Validators.required)
    })
    this.isLoaded = true;
  }

  async ngOnInit() {
    this.reason = this.activatedRoute.snapshot.params.reason;
    if(this.reason == 'new') {
      this.createForm(this.heroeObject);
      this.message = "Alta de heroe"
    } else {
      await this.getHeroe(this.reason);
      this.createForm(this.heroe);
      this.message = "Editar"
    }
  }

  async enviarFormulario(){
    let resp = await this.swalService.confirmMessage({text : 'Deseas dar de alta este heroe?'})
    console.log(resp)
    if(resp.value) {
      let resultado = await this.heroesServiceBack.createHeroe(this.form.value);
      if(resultado) {
        this.swalService.normalMessage({icon : 'success', html : 'Heroe dado de alta'})
      }
    }else {
      // this.form.reset(); no dan de alta al super heroe
    }
  }

  async getHeroe(id) {
    // console.log(resp)
    let result :any = await this.heroesServiceBack.getSingle(id);
    this.heroe = result.heroe;
    console.log(this.heroe);
    
  }

}
