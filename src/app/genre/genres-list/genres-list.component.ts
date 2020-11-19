import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGenre } from 'src/app/core/models/genre';
import { GenreService } from 'src/app/core/services/genre.service';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {

  constructor(private genreService: GenreService) { }

  $genres: Observable<IGenre[]>;

  ngOnInit(): void {
      this.$genres = this.genreService.getGenres();
  }

}
