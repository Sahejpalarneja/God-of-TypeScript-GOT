import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  character : string = history.state.data
  constructor() { }

  ngOnInit(): void {
  }

}
