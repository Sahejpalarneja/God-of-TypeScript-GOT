import { Component, OnInit,Input } from '@angular/core';
import { Book } from 'src/app/Templates/Book';
import { BooksService } from 'src/app/services/books.service';


@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {
  @Input() url!:string;
  currentBook!:Book;
  constructor(
     private bookService:BooksService
  ) { }

  ngOnInit(): void {
    this.getBook()
  }
  getBook(){
    const id = Number(this.url.split('/').pop());
    this.bookService
    .getBook(id)
    .subscribe((data) => (this.currentBook = data))
  }
}
