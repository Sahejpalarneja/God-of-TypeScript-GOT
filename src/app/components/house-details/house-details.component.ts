import { Component, OnInit,Input } from '@angular/core';
import { House } from 'src/app/Templates/House';
import { HousesService } from 'src/app/services/houses.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {
  house!:House;
  @Input() url = history.state.data; 
  constructor(
    private houseService:HousesService,
    private router:Router // this is used for navigation

  ) { }

  ngOnInit(): void {
    this.getHouse()//sets all the houses
    
  }
  getHouse():void{
    const id = Number(this.url.split('/').pop() );
    this.houseService
    .getHouse(id)
    .subscribe((data) => (this.house = data));
  }
  onHouseClick(url:string)
  {
    //navigates to the new house details of the house cicked
    this.url = url;
    this.getHouse();
  }
  onCharacterClick(url:string)
  {
    //navigates to the character details clicked
    this.router.navigate(['/id'],{state:{data:url}})
  }

}
