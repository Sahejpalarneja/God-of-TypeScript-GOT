import { Character } from 'src/app/Templates/Character';
import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/characters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-character',
  templateUrl: './display-character.component.html',
  styleUrls: ['./display-character.component.css'],
})
export class DisplayCharacterComponent implements OnInit {
  @Input() character!:Character
  @Input() url =history.state.data;
  father! :Character;
  characterObj! : Character ;
  constructor(
   
    private characterService: CharacterService,
    private router:Router,
   
  ) {
  
  }

  ngOnInit(): void {
    this.getCharacter();
   
  }

  getCharacter(): void {
    const id2 = Number(this.url.split('/').pop() );
   
    this.characterService
      .getCharacter(id2)
      .subscribe((character) => (this.character = character));
      
  }
  onCharacterClick(url:string){
   this.url = url;
   this.getCharacter();
  }
  onHouseClick(url:string){

  }
  
}