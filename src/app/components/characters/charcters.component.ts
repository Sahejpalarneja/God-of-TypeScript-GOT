import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/Templates/Character';
import { CharacterService } from 'src/app/services/characters.service';
import { Router } from '@angular/router';


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
  pageNumber : number = 1;
  private currentPage = 1;

  constructor(private characterservice :CharacterService,private router :Router) { }

  ngOnInit(): void {
    this.getCharacters()
    //this.characterservice.getAllCharacters(this.pageNumber).subscribe((data: Character[])=>(this.characters = data));
    
  }
  getCharacters(): void {
    this.characterservice
      .getAllCharacters(this.currentPage)
      .subscribe((characters) => (this.characters = characters));
  }
  paginate(event: PaginatorEvent): void {
    this.currentPage = event.page + 1;
    this.getCharacters();
  }
  onCharacterclick(charcter:Character){
    this.router.navigate(["/id"],{state:{data:charcter.url}})
  }

}
