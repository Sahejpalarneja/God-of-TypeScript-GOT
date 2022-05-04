import { Component, OnInit, Input} from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/Character';


import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-characteritem',
  templateUrl: './characteritem.component.html',
  styleUrls: ['./characteritem.component.css']
})
export class CharacteritemComponent implements OnInit {
  @Input() character! : string;
  characterObject! :Character;
  constructor(private characterService : CharactersService) { 
    this.characterService.getCharacter(this.character).subscribe((character) => (this.characterObject))
    alert(this.characterObject.name)
  }

  ngOnInit(): void {
   
    this.characterService.getCharacter(this.character).subscribe((character) => (this.characterObject))
    alert(this.characterObject.name)
  }
  
 
}
