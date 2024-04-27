import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/Pokemon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
   pokemon:Pokemon[] = [];
   constructor(private pokemonService:PokemonService) {


  }

  listar():void{
      this.pokemonService.listar().subscribe((listaPokemon) => (this.pokemon = listaPokemon));
  }

  ngOnInit():void{
    this.listar();
  }

}
