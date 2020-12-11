import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IReview } from 'src/app/core/models/review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent implements OnInit {

  reviews$: Observable<IReview[]>

  constructor(private reviewService: ReviewService) { 

  }

  ngOnInit(): void {
    this.reviews$ = this.reviewService.getAllReviews();
  }

}
