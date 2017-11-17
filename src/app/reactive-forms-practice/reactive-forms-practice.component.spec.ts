import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsPracticeComponent } from './reactive-forms-practice.component';

describe('ReactiveFormsPracticeComponent', () => {
  let component: ReactiveFormsPracticeComponent;
  let fixture: ComponentFixture<ReactiveFormsPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
