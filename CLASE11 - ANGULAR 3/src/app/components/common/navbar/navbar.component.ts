import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  rutas : any = [];

  constructor(private router : Router) {}
  ngOnInit() {
    // fontawesome.io
    // si es administrador
    this.rutas = [ 
      {link : 'heroes', description : 'Ver Heroes', icon : 'fa fa-home'},
      {link : 'create-edit/heroe/new', description : 'Crear heroe', icon : ''}
    ]
    // si es usuario comun

  }
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
