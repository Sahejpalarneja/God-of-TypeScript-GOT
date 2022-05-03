import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/Character';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-charcters',
  templateUrl: './charcters.component.html',
  styleUrls: ['./charcters.component.css']
})
export class CharctersComponent implements OnInit {
  characters :Character[] =[]
  constructor(private CharcterService : CharactersService) { }

  ngOnInit(): void {
    this.CharcterService.getCharacters().subscribe((characters) =>(this.characters = characters))
  }

}
