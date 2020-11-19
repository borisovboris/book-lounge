import { Injectable } from '@angular/core';
import { IGenre } from '../models/genre';
import { genres } from '../mock-data/genres';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenreService {
  $genres: Observable<Array<IGenre>>;

  constructor() { 
    
  }

  getGenres() {
    this.$genres = of(genres);
  }
  
}
