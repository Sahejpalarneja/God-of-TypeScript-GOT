import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/Templates/House';
import { HousesService } from 'src/app/services/houses.service';
import { Router } from '@angular/router';

type PaginatorEvent = {
  page: number;
};
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  houses:House[] = [];

  private currentPage = 1;

  constructor(private houseService: HousesService,private router:Router) { }

  ngOnInit(): void {
    this.getHouses();
  }
  getHouses(): void {
    this.houseService
      .getAllHouses(this.currentPage)
      .subscribe((data) => (this.houses = data));
  }
  paginate(event: PaginatorEvent): void {
    this.currentPage = event.page + 1;
    this.getHouses();
  }
  onHouseClick(house:House){
    this.router.navigate(["/houseId"],{state:{data:house.url}})

  }

}
