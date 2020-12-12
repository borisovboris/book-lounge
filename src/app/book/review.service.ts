import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { reviews } from '../core/mock-data/reviews';
import { IReview } from '../core/models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  public books: BehaviorSubject<IReview[]> = new BehaviorSubject<IReview[]>(reviews);
  public books$ = this.books.asObservable();

  constructor() { }

  getAllReviews(): Observable<IReview[]> {
    return this.books$.pipe(delay(1000));
  }

  addReview(reviewContent: string): void {

    const newReview = { id: reviews.length + 1,
    username: 'Anonymous',
    content: reviewContent
    }
    reviews.unshift(newReview);

    
    this.books.next(reviews);
  }

}
