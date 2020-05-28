import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  rutas : any = [];

  ngOnInit() {
    // fontawesome.io
    // si es administrador
    this.rutas = [ 
      {link : 'heroes', description : 'Ver Heroes', icon : 'fa fa-home'},
      {link : 'new/heroe', description : 'Crear heroe', icon : ''}
    ]
    // si es usuario comun

  }

}
