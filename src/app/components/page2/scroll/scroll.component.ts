import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router'
import { Book } from 'src/app/Templates/Book';



@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})

export class ScrollComponent implements OnInit {
  @Input() currentBook! : Book;
  characters :string[]= [];
 //sets up an infinite scroll for the charcaters present in a book

  constructor( private router:Router){ 
    
  }

  ngOnInit(): void { 
    this.characters = this.currentBook.characters;
 
  }
  onCharacterClick(character:string)
  {
    this.router.navigate(["/id"],{state:{data:character}});
 
  }
}
