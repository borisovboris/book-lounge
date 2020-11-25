import { Injectable } from '@angular/core';
import { IGenre } from '../models/genre';
import { genres } from '../mock-data/genres';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenreService {
  $genres: Observable<IGenre[]>;

  constructor() { 
    
  }

  getGenres(): Observable<IGenre[]> {
    return this.$genres = of(genres);
  }

}
