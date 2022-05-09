import { Character } from 'src/app/Character';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-display-character',
  templateUrl: './display-character.component.html',
  styleUrls: ['./display-character.component.css'],
})
export class DisplayCharacterComponent implements OnInit {
  @Input() character!:Character;
  characterObj! : Character ;
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private location: Location
  ) {
    this.getCharacter();
  }

  ngOnInit(): void {
    this.getCharacter();
    console.log(this.character)
  }

  getCharacter(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.characterService
      .getCharacter(id)
      .subscribe((character) => (this.character = character));
  }
}