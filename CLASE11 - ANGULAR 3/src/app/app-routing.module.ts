import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { NuevoHeroeComponent } from './components/nuevo-heroe/nuevo-heroe.component';
// App.js
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
// number, string, Array, Date, any
// routes : Es de tipo Route
const routes : Routes = [
    // /testing
    {path : 'heroes', component : HeroesComponent},
    {path : 'heroe/:id', component : HeroeComponent},
    {path : 'create-edit/heroe/:reason' , canActivate:[AuthGuard], component : NuevoHeroeComponent},
    {path : 'login', component : LoginComponent},
    {path : '**', redirectTo : 'heroes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
