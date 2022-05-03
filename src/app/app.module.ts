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

const appRoutes:Routes = [
  {path:'',component:BooksComponent},
  {path:'details',component:DetailsComponent}
]
  
@NgModule({
  declarations: [
    AppComponent,
    BookItemComponent,
    BooksComponent,
    CharctersComponent,
    HousesComponent,
    HeaderComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
