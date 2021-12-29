import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtextComponent } from './formtext.component';

describe('FormtextComponent', () => {
  let component: FormtextComponent;
  let fixture: ComponentFixture<FormtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormtextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
