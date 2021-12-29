import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWriterComponent } from './card-writer.component';

describe('CardWriterComponent', () => {
  let component: CardWriterComponent;
  let fixture: ComponentFixture<CardWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWriterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
