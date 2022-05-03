import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Character } from '../Character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private apiUrl = 'https://anapioficeandfire.com/api/characters';

  constructor(private http:HttpClient) { }
  getCharacters():Observable<Character[]>{
    return this.http.get<Character[]>(this.apiUrl)
  }
}
