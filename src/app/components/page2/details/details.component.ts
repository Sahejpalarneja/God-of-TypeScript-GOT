import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/Templates/Book';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  url :string = history.state.data
  constructor() {
    
   }

  ngOnInit(): void {
   
  }

}
