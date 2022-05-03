import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Game of Jokers'
  imageSrc = 'assets/images/logo.jpeg'
  constructor() { }

  ngOnInit(): void {
  }

}
