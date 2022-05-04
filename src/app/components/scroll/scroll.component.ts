import { Component, OnInit ,Input} from '@angular/core';

import { Book } from 'src/app/Book';



@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
  @Input() currentBook! : Book;
  characters :string[]= [];

  constructor(){ 
    
  }

  ngOnInit(): void { 
    this.characters = this.currentBook.characters;
 
  }
  
}
