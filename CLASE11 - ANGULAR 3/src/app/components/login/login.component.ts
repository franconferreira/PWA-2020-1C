import { SwalService } from './../../services/common/swal.service';
import { AuthService } from './../../services/common/auth.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  isLoaded : boolean;
  loginForm = {
    usuario : new FormControl('',[Validators.required]), 
    password : new FormControl('',[Validators.required])
  }
  constructor(
    private authService : AuthService, 
    private router : Router,
    private swalService : SwalService) { }
  
  createForm() {
    this.isLoaded = false;
    this.form = new FormGroup(this.loginForm);
    this.isLoaded = true;
  }
  ngOnInit() {
    this.createForm();
  }
  
  async auth() {
    // let result = await this.authService.login() // info que retorna el back
    let autenticacion_backend = {usuario : "franco di leo", JWT : '524222e8-c26d-4a24-b232-c9883e011dba'}; // modelo de informacion retornada
    let result = true;
    if(result) {
        sessionStorage.setItem('auth',JSON.stringify(autenticacion_backend));
        this.router.navigate(['create-edit','heroe','new'])   
    } else {
      // Mostrar un mensaje de error + limpiar el formulario
      this.swalService.normalMessage({icon : 'error',html : '<b>Usuario o contraseña incorrecto</b>'})
      this.form.reset();
    }
    
  }

}
