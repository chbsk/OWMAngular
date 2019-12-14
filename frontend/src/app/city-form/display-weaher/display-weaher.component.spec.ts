import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWeaherComponent } from './display-weaher.component';

describe('DisplayWeaherComponent', () => {
  let component: DisplayWeaherComponent;
  let fixture: ComponentFixture<DisplayWeaherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayWeaherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayWeaherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
