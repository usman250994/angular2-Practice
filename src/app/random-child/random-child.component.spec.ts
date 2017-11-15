import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomChildComponent } from './random-child.component';

describe('RandomChildComponent', () => {
  let component: RandomChildComponent;
  let fixture: ComponentFixture<RandomChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
