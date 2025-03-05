import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {
  FormsReactiveValidationOnType,
} from './forms-reactive-validation-on-type.component';

describe('FormsReactiveValidationOnType', () => {
  let component: FormsReactiveValidationOnType;
  let fixture: ComponentFixture<FormsReactiveValidationOnType>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsReactiveValidationOnType],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsReactiveValidationOnType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
