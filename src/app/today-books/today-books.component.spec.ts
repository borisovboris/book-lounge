import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayBooksComponent } from './today-books.component';

describe('TodayBooksComponent', () => {
  let component: TodayBooksComponent;
  let fixture: ComponentFixture<TodayBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
