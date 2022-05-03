import { Injectable } from '@angular/core';
import {Observable } from 'rxjs' ;
import {HttpClient} from '@angular/common/http';
import {Book} from '../Book';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'https://anapioficeandfire.com/api/books';
  constructor(private http:HttpClient) { }
  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl)

  }

}
