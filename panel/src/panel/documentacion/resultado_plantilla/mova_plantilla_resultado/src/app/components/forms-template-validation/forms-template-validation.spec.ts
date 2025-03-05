import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsTemplateValidation} from './forms-template-validation.component';

describe('FormsTemplateValidation', () => {
  let component: FormsTemplateValidation;
  let fixture: ComponentFixture<FormsTemplateValidation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsTemplateValidation],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTemplateValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
