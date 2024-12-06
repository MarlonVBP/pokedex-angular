import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BobBurgersService {
  protected apiURL: string = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getAllCharacters(page: number | string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/character/?page=${page}`);
  }

  getCharacterById(id: number | string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/character/${id}`);
  }
}
