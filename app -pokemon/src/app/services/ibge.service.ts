import { Injectable } from '@angular/core';
import { ibge } from '../interfaces/ibge';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ibgeService {
  private clienteUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
  constructor(private http: HttpClient) {}

  //Esta lista virá da API
  listaIBGE:ibge[] = [];

  listar(): Observable <ibge[]>{

    return this.http.get<ibge[]>(this.clienteUrl) as Observable<ibge[]>;


 
  }


}
