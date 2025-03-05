import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StudentView} from './student-view.component';

describe('StudentView', () => {
  let component: StudentView;
  let fixture: ComponentFixture<StudentView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentView],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
