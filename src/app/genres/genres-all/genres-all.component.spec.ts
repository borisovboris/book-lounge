import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresAllComponent } from './genres-all.component';

describe('GenresAllComponent', () => {
  let component: GenresAllComponent;
  let fixture: ComponentFixture<GenresAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
