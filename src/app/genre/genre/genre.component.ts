import { Component, Input, OnInit } from '@angular/core';
import { IGenre } from 'src/app/core/models/genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  @Input() genre: IGenre;
  imageUrl: string;

  constructor() { }

  ngOnInit(): void {
    this.imageUrl = 'assets/images/genres/' + this.genre.imageName;
  }

}
