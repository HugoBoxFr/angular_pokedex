import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { CreatePokemonComponent } from './pages/create-pokemon/create-pokemon.component';


const ROUTES: Routes = [
  { path: '', component: PokedexPageComponent },
  { path: 'create', component: CreatePokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
