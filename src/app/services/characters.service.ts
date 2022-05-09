import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Character } from '../Character';
import { Book } from '../Book';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private apiUrl :string= 'https://anapioficeandfire.com/api/characters';

  constructor(private http:HttpClient) { }
  getAllCharacters():Observable<Character[]>{
    return this.http.get<Character[]>(this.apiUrl)
  }
  getCharacter(url:string):Observable<Character>{
    return this.http.get<Character>(url);
  }
}