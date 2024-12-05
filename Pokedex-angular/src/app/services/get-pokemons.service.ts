import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPokemonsService {
  protected apiURL:string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  get(filtro: string | number){

  }

  getAll(){
    return this.http.get<any>(`${this.apiURL}`)
  }
}
