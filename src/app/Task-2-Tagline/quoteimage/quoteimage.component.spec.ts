import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteimageComponent } from './quoteimage.component';

describe('QuoteimageComponent', () => {
  let component: QuoteimageComponent;
  let fixture: ComponentFixture<QuoteimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
