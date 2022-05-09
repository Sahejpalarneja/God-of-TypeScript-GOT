import { Component, OnInit,Input } from '@angular/core';
import { Book } from 'src/app/Templates/Book';


@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {
  @Input() currentBook!:Book;
  constructor() { }

  ngOnInit(): void {
  }

}
