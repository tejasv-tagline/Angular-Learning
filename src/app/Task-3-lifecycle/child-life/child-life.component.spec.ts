import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLifeComponent } from './child-life.component';

describe('ChildLifeComponent', () => {
  let component: ChildLifeComponent;
  let fixture: ComponentFixture<ChildLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
