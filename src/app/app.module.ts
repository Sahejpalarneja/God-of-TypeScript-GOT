import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { BookItemComponent } from './components/page1/book-item/book-item.component';
import { BooksComponent } from './components/books/books.component';
import { CharctersComponent } from './components/characters/charcters.component';
import { HousesComponent } from './components/houses/houses.component';
import { HeaderComponent } from './components/page1/header/header.component';
import { Routes,RouterModule } from '@angular/router';
import { DetailsComponent } from './components/page2/details/details.component';
import { DisplayBookComponent } from './components/page2/display-book/display-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollComponent } from './components/page2/scroll/scroll.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CharacteritemComponent } from './components/page2/characteritem/characteritem.component';
import { CharacterDetailsComponent } from './components/page3/character-details/character-details.component';
import { DisplayCharacterComponent } from './components/page3/display-character/display-character.component';
import { DisplayAllCharactersComponent } from './components/characterPage/display-all-characters/display-all-characters.component';
import { DisplayAllHousesComponent } from './components/characterPage/display-all-houses/display-all-houses.component';
import { PaginatorModule } from 'primeng/paginator';
import { HouseDetailsComponent } from './components/house-details/house-details.component';

const appRoutes:Routes = [
  {path:'',component:BooksComponent},
  {path:'details',component:DetailsComponent},
  {path:'character',component:DisplayAllCharactersComponent},
  {path:'books',component:BooksComponent},
  {path:'houses',component:DisplayAllHousesComponent},
  {path:'id',component:CharacterDetailsComponent},
  {path:'houseId',component:HouseDetailsComponent}
]
  
@NgModule({
  declarations:
  [  
    AppComponent,
    BookItemComponent,
    BooksComponent,
    CharctersComponent,
    HousesComponent,
    HeaderComponent,
    DetailsComponent,
    DisplayBookComponent,
    ScrollComponent,
    CharacteritemComponent,
    CharacterDetailsComponent,
    DisplayCharacterComponent,
    DisplayAllCharactersComponent,
    DisplayAllHousesComponent,
    HouseDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ScrollingModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
