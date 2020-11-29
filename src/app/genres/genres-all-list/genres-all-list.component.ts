import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GenreService } from 'src/app/core/services/genre.service';

@Component({
  selector: 'app-genres-all-list',
  templateUrl: './genres-all-list.component.html',
  styleUrls: ['./genres-all-list.component.css']
})
export class GenresAllListComponent implements OnInit {
  genresNames$: Observable<Array<string>>

  constructor(private genreService: GenreService) { 
    this.genresNames$ = genreService.getAllGenres();
  }


  ngOnInit(): void {
  }

}
