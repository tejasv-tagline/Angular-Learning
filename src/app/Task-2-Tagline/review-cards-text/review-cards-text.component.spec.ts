import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCardsTextComponent } from './review-cards-text.component';

describe('ReviewCardsTextComponent', () => {
  let component: ReviewCardsTextComponent;
  let fixture: ComponentFixture<ReviewCardsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewCardsTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCardsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
