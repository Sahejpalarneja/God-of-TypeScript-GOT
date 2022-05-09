import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Game of Jokers'
  imageSrc = 'assets/images/logo.jpeg'
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onCharacterClicked()
  {
    this.router.navigate(["/character"]);
    

  }
  onBooksClicked()
  {
    this.router.navigate(["/books"]) 
  }
  onHousesClicked()
  {
    this.router.navigate(["/houses"]) 
  }
}
