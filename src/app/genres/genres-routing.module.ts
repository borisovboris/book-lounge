import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresAllListComponent } from './genres-all-list/genres-all-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: GenresAllListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule { }
