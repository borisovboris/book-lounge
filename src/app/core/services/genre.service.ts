import { Injectable } from '@angular/core';
import { IGenre } from '../models/genre';
import { genres } from '../mock-data/genres';
import { allGenres } from '../mock-data/genres-all';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor() { 
    
  }

  getGenres(): Observable<IGenre[]> {
    return of(genres);
  }

  getAllGenres(): Observable<string[]> {
    return of (allGenres);
  }

}
