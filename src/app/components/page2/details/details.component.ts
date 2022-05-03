import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/Book';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  currentBook :Book = history.state.data
  constructor() {
    
   }

  ngOnInit(): void {
    alert(this.currentBook.name)
  }

}
