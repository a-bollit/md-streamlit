import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsReactiveValidation} from './forms-reactive-validation.component';

describe('FormsReactiveValidation', () => {
  let component: FormsReactiveValidation;
  let fixture: ComponentFixture<FormsReactiveValidation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsReactiveValidation],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsReactiveValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
