import { Component, OnInit ,Input} from '@angular/core';
import { Character } from 'src/app/Character';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-display-character',
  templateUrl: './display-character.component.html',
  styleUrls: ['./display-character.component.css']
})
export class DisplayCharacterComponent implements OnInit {
  @Input() character!:string;
  characterObject!:Character;
  constructor(private characterService :CharactersService) {
    this.characterService.getCharacter(this.character).subscribe((character) => (this.characterObject)) 
   }
   

  ngOnInit(): void {
    
  }
  getCharacterObject():Character{
    return this.characterObject
  }
  
}
