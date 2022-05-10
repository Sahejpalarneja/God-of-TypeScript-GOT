import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/Templates/Character';
import { CharacterService } from 'src/app/services/characters.service';
import { Router } from '@angular/router';

//Raises an event every time a page is changed
type PaginatorEvent = {
  page: number;
};
@Component({
  selector: 'app-charcters',
  templateUrl: './charcters.component.html',
  styleUrls: ['./charcters.component.css']
})
export class CharctersComponent implements OnInit {
  characters :Character[] =[]

  private currentPage = 1;

  constructor(private characterservice :CharacterService,private router :Router) { }

  ngOnInit(): void {
    //Set the character
    this.getCharacters()
    
  }
  getCharacters(): void {
    this.characterservice
      .getAllCharacters(this.currentPage)
      .subscribe((characters) => (this.characters = characters));
  }
  paginate(event: PaginatorEvent): void {
    //increases the page number
    this.currentPage = event.page + 1;
    this.getCharacters();
  }
  onCharacterclick(charcter:Character){
    //navigates to the character details
    this.router.navigate(["/id"],{state:{data:charcter.url}})
  }

}
