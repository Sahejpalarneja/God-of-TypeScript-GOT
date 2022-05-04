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
    DetailsComponent,
    DisplayBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
