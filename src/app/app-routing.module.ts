import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {JokeComponent} from './joke/joke.component';

const routes: Routes = [{path: '', redirectTo: 'joke', pathMatch: 'full'},
  {path: 'joke', component: JokeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
