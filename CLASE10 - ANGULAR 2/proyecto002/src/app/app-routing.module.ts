// App.js
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

// number, string, Array, Date, any
// routes : Es de tipo Route
const routes : Routes = [
    // /testing
    {path : 'heroes', component : HeroesComponent},
    {path : 'heroe/:id', component : HeroeComponent},
    {path : '**', redirectTo : 'heroes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
