import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BooksComponent } from './components/books/books.component';
import { CharctersComponent } from './components/characters/charcters.component';
import { HousesComponent } from './components/houses/houses.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BookItemComponent,
    BooksComponent,
    CharctersComponent,
    HousesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
