import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {
  FormsTemplateValidationOnType,
} from './forms-template-validation-on-type.component';

describe('FormsTemplateValidationOnType', () => {
  let component: FormsTemplateValidationOnType;
  let fixture: ComponentFixture<FormsTemplateValidationOnType>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsTemplateValidationOnType],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTemplateValidationOnType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
