
import { Injectable } from '@angular/core';
import { Character } from '../Character';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private charactersUrl = 'https://www.anapioficeandfire.com/api/characters';
  private pageSize = 50;
  private totalPages = 43;
 
  constructor(
    private http: HttpClient,
    
  ) {}

  getCharacters(pageNumber: number): Observable<Character[]> {
    const url = `${this.charactersUrl}?page=${pageNumber || 1}&pageSize=${
      this.pageSize
    }`;

    return this.http.get<Character[]>(url).pipe(
      map((characters) => {
        const chractersWithId = characters.map((character, index) => {
          const id = character.url.split('/').pop() || `${index}`;
          return { ...character, id };
        });

        return chractersWithId;
      })
    );
  }
  getAllCharacters(pageNumber:number):Observable<Character[]>{
    const url = `${this.charactersUrl}?page=${pageNumber || 1}&pageSize=${
      this.pageSize
    }`;
    return this.http.get<Character[]>(url)
  }

  getCharacter(id: number): Observable<Character> {
    const url = `${this.charactersUrl}/${id}`;
    return this.http.get<Character>(url).pipe(
      map((character, index) => {
        const id = character.url.split('/').pop() || `${index}`;
        return { ...character, id };
      })
    );
  }

}

 