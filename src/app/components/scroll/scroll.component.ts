import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router'
import { Book } from 'src/app/Book';



@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})

export class ScrollComponent implements OnInit {
  @Input() currentBook! : Book;
  characters :string[]= [];
  private router:Router

  constructor(){ 
    
  }

  ngOnInit(): void { 
    this.characters = this.currentBook.characters;
 
  }
  onCharacterClick(character:string)
  {
    this.router.navigate(["/character"],{state:{data:character}});
  }
}
