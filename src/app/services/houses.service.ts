import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { House } from '../House';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  private apiUrl = 'https://anapioficeandfire.com/api/houses'

  constructor(private http:HttpClient) { }

  getHouses(): Observable<House[]>{
    return this.http.get<House[]>(this.apiUrl)
  }
}
