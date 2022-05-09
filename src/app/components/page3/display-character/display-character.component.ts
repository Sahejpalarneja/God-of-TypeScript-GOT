import { Component, OnInit ,Input} from '@angular/core';
import { map, Observable, Subscriber, Subscription } from 'rxjs';
import { Character } from 'src/app/Character';
import { CharactersService } from 'src/app/services/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-character',
  templateUrl: './display-character.component.html',
  styleUrls: ['./display-character.component.css']
})

export class DisplayCharacterComponent implements OnInit {
  @Input() character!:string;
  private route!:ActivatedRoute;
  characterObject!:Observable<Character>;
   char! :Character;
  
  
  id! :number;
  name! :string ;
  constructor(private characterService :CharactersService,) {
    this.getCharacter();
    //this.characterService.getCharacter(this.character).subscribe((data) => (this.char))
    
    console.log(this.char)
  }
  ngOnInit(): void {
    this.getCharacter()
    //this.characterService.getCharacter(this.character).subscribe((data:Character) => (this.char))
    console.log(this.char)
    
  }
  getCharacter():void{
   this.characterService.getCharacter(this.character).pipe(map((data) => data.name)).subscribe((data) =>(this.name))
   console.log(this.name)
  }


}
