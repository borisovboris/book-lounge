import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresAllListComponent } from './genres-all-list.component';

describe('GenresAllListComponent', () => {
  let component: GenresAllListComponent;
  let fixture: ComponentFixture<GenresAllListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresAllListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresAllListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
