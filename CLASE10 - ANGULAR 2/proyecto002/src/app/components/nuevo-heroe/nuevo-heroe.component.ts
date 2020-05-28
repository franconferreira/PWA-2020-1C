import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-nuevo-heroe',
  templateUrl: './nuevo-heroe.component.html',
  styleUrls: ['./nuevo-heroe.component.css']
})
export class NuevoHeroeComponent implements OnInit {
  // form : FormGroup;
  constructor() { }

  // formGroup 
    // -> formControl -> Validator
    // -> formControl -> Validator
  ngOnInit() {
    // this.form = new FormGroup({
    //   'nombre' : new FormControl(''),
    //   'descripcion' : new FormControl('')
    // })
  }

}
