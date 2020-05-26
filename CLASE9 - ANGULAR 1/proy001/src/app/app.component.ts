import { Component, OnInit } from '@angular/core';
import { Usuarios } from './models/usuarios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , Usuarios{
  title = 'proy001';
  // select nombre_p, descripcion_p, precio_p, foto_p from productos
  nombre  = "";
  apellido = "";
  mail = ""; 
  edad = 17;
  mensaje : string = "";
  contador : number = 0;

  verificarEdad() {
    this.edad >= 18 ? this.mensaje = "Bienvenido" : this.mensaje = "No tenes permisos para acceder";
    // this.contador = 2
  }

  variarContador(reason) {
    reason == 'sumar' ? this.contador++ : this.contador--
    // this.contador++;
  }

  ngOnInit() {
    this.verificarEdad()
  }
}
