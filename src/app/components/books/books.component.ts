import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Templates/Book';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Book[]  = []
 
  

  constructor(private BooksService :BooksService) {} 

  ngOnInit(): void {
    this.BooksService.getBooks().subscribe((books) => (this.books = books))
  }
 

}
