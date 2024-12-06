import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BobBurgersService {
  protected apiURL: string = 'https://bobsburgersapi.com';

  constructor(private http: HttpClient) {}

  // Characters
  getAllCharacters(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/characters`);
  }

  getCharacterById(id: number | string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/characters/${id}`);
  }

  // Episodes
  getAllEpisodes(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/episodes`);
  }

  getEpisodeById(id: number | string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/episodes/${id}`);
  }

  // Quotes
  getAllQuotes(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/quotes`);
  }

  getQuoteById(id: number | string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/quotes/${id}`);
  }
}
