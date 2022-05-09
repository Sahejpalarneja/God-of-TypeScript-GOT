import { Injectable } from '@angular/core';
import {map, Observable } from 'rxjs' ;
import {HttpClient} from '@angular/common/http';
import {Book} from '../Templates/Book';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'https://anapioficeandfire.com/api/books';
  constructor(private http:HttpClient) { }
  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl)

  }
  getBook(id: number): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      map((book, index) => {
        const id = book.url.split('/').pop() || `${index}`;
        return { ...book, id };
      })
    );
  }

}
