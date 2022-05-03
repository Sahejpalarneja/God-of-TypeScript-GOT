import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/House';
import { HousesService } from 'src/app/services/houses.service';
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  houses:House[] = []

  constructor(private HousesService: HousesService) { }

  ngOnInit(): void {
    this.HousesService.getHouses().subscribe((houses) => (this.houses = houses))
  }

}
