import { Injectable } from '@angular/core';
import {Pokemon} from '../interfaces/Pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private clienteUrl = "http://demo8336182.mockable.io/consulta_pokemon";
  constructor(private http: HttpClient) {}

  //Esta lista virá da API
  clientes:Pokemon[] = [];

  listar(): Observable <Pokemon[]>{

    return this.http.get<Pokemon[]>(this.clienteUrl) as Observable<Pokemon[]>;


  }


}
