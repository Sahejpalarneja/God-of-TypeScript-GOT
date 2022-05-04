import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
  getCharacter(charUrl:string):Observable<Character>{
    return this.http.get<Character>(charUrl) 
  }
}
