import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StudentInfo} from './student-info.component';

describe('StudentInfo', () => {
  let component: StudentInfo;
  let fixture: ComponentFixture<StudentInfo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentInfo],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
