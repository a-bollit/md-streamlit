import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocRecaptcha} from './doc-recaptcha.component';

describe('DocRecaptchaComponent', () => {
  let component: DocRecaptcha;
  let fixture: ComponentFixture<DocRecaptcha>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocRecaptcha],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocRecaptcha);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
