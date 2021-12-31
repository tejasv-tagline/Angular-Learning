import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLifeComponent } from './parent-life.component';

describe('ParentLifeComponent', () => {
  let component: ParentLifeComponent;
  let fixture: ComponentFixture<ParentLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
