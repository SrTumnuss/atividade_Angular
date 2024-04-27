import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ibjeComponent } from './components/ibje/ibje.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

export const routes: Routes = [

{path: '', component: HomeComponent},
{path:'ibje', component: ibjeComponent},
{path: 'cliente/:id', component: ClientDetailComponent},
{path: 'pokemon', component: PokemonComponent}, 
{path: '**', component: HomeComponent}



];
