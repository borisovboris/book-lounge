import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FillIconDirective } from './fill-icon.directive';
import { GenresListComponent } from './genre/genres-list/genres-list.component';
import { GenreComponent } from './genre/genre/genre.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavComponent,
    FooterComponent,
    FillIconDirective,
    GenresListComponent,
    GenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
