import { Character } from 'src/app/Character';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { CharacterService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-display-character',
  templateUrl: './display-character.component.html',
  styleUrls: ['./display-character.component.css'],
})
export class DisplayCharacterComponent implements OnInit {
  @Input() character!:Character
  @Input() url =history.state.data;
  characterObj! : Character ;
  constructor(
   
    private characterService: CharacterService,
    private location: Location
  ) {
    this.getCharacter();
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
}