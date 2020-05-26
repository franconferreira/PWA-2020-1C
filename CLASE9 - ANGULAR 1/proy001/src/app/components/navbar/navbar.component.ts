import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
    //  instanciar servicios
    console.log("Me ejecuto primero en la clase")
   }

  ngOnInit() {
    // hacer peticiones http a un back
    console.log("Me ejecuto automaticamente y segundo en la clase")
  }

}
