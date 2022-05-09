import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Templates/Book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input()
  book!: Book; 
  @Output() btnClickDetails = new EventEmitter()

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClickDetails(currentBook:Book){
    this.router.navigate(["/details"],{state:{data:currentBook}});
  }

}
