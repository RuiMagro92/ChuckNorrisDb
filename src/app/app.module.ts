import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokesComponent } from './jokes/jokes.component';
import { CategoryComponent } from './category/category.component';
import { CategoriesComponent } from './categories/categories.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomJokeComponent } from './custom-joke/custom-joke.component';
import {MenuComponent} from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokesComponent,
    CategoryComponent,
    MenuComponent,
    CategoriesComponent,
    CustomJokeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
