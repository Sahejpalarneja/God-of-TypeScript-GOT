import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { House } from '../House';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  private apiUrl = 'https://anapioficeandfire.com/api/houses'
  private pageSize = 50;

  constructor(private http:HttpClient) { }

  getAllHouses(pageNumber:number): Observable<House[]>{
    const url = `${this.apiUrl}?page=${pageNumber || 1}&pageSize=${
      this.pageSize
    }`;
    return this.http.get<House[]>(this.apiUrl)
  }

  getHouse(id:number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<House>(url).pipe(
      map((house, index) => {
        const id = house.url.split('/').pop() || `${index}`;
        return { ...house, id };
      })
    );
  }
}
