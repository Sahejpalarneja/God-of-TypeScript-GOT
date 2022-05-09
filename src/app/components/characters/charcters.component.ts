import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/Character';
import { CharacterService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-charcters',
  templateUrl: './charcters.component.html',
  styleUrls: ['./charcters.component.css']
})
export class CharctersComponent implements OnInit {
  characters :Character[] =[]
  data : Character[] = [];
  constructor(private characterservice :CharacterService) { }

  ngOnInit(): void {
    this.characterservice.getAllCharacters().subscribe((data: Character[])=>(this.characters = data));
    
  }

}
