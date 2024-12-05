import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Página inicial'
  },
  {
    path: 'pokedex',
    component: PokedexComponent,
    title: 'Pokedex'
  }
];
