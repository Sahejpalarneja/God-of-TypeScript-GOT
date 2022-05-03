import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Book } from 'src/app/Book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input()
  book!: Book; 
  @Output() btnClickDetails = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  onClickDetails(){
    this.btnClickDetails.emit()
  }

}
