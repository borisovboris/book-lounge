import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresAllListComponent } from './genres-all-list/genres-all-list.component';


@NgModule({
  declarations: [GenresAllListComponent],
  imports: [
    CommonModule,
    GenresRoutingModule
  ]
})
export class GenresModule { }
