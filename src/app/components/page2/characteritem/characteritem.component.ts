import { Component, OnInit, Input} from '@angular/core';

import { Character } from 'src/app/Templates/Character';




@Component({
  selector: 'app-characteritem',
  templateUrl: './characteritem.component.html',
  styleUrls: ['./characteritem.component.css']
})
export class CharacteritemComponent implements OnInit {
  @Input() character! : string;
  characterObject! :Character;
  constructor() { 
    //this.characterService.getCharacter(this.character).subscribe((character) => (this.characterObject))
    alert(this.characterObject.name)
  }

  ngOnInit(): void {
   
    //this.characterService.getCharacter(this.character).subscribe((character) => (this.characterObject))
    alert(this.characterObject.name)
  }
  
 
}
