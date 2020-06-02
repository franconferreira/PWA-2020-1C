import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-nuevo-heroe',
  templateUrl: './nuevo-heroe.component.html',
  styleUrls: ['./nuevo-heroe.component.css']
})
export class NuevoHeroeComponent implements OnInit {
  form : FormGroup;
  isLoaded : boolean;
  constructor() { }

  // /heroes/1
  createForm() {
    this.isLoaded = false;
    this.form = new FormGroup({
      nombre :new FormControl('',[Validators.required,Validators.minLength(2)]),
      descripcion : new FormControl('',[Validators.required]),
      casa: new FormControl('',Validators.required),
      mail_heroe : new FormControl('',[Validators.required,Validators.pattern("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")]),
      fecha_nacimiento : new FormControl('',Validators.required)
    })
    this.isLoaded = true;
  }
  ngOnInit() {
    this.createForm();
  }

  enviarFormulario(){
    console.log(this.form); //this.form.value -> información objeto del formulario
  }

}
