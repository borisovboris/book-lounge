import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresAllComponent } from './genres-all/genres-all.component';


@NgModule({
  declarations: [GenresAllComponent],
  imports: [
    CommonModule,
    GenresRoutingModule
  ]
})
export class GenresModule { }
