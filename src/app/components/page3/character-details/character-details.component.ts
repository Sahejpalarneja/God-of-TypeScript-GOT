import { Component, OnInit , Input} from '@angular/core';
import { Character } from 'src/app/Character';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  character = history.state.data
  constructor() { }

  ngOnInit(): void {
  }

}
