import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirienceHeadingComponent } from './expirience-heading.component';

describe('ExpirienceHeadingComponent', () => {
  let component: ExpirienceHeadingComponent;
  let fixture: ComponentFixture<ExpirienceHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpirienceHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpirienceHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
