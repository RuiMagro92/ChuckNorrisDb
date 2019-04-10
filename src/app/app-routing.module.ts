import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {JokeComponent} from './joke/joke.component';
import {CustomJokeComponent} from './custom-joke/custom-joke.component';

const routes: Routes = [{path: '', redirectTo: 'joke', pathMatch: 'full'},
  {path: 'joke', component: JokeComponent},
  {path: 'customjoke', component: CustomJokeComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
