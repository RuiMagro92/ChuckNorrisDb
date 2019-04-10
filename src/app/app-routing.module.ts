import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {JokeComponent} from './joke/joke.component';
import {CategoriesComponent} from './categories/categories.component';
import {CustomJokeComponent} from './custom-joke/custom-joke.component';
import {JokeDetailComponent} from './joke-detail/joke-detail.component';

const routes: Routes = [{path: '', redirectTo: 'joke', pathMatch: 'full'},
  {path: 'joke', component: JokeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'customjoke', component: CustomJokeComponent},
  {path: 'category/:id', component: JokeDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
