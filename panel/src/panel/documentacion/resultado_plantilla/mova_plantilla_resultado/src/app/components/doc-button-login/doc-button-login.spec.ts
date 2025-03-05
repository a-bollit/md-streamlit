import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocButtonLogin} from './doc-button-login.component';

describe('DocButtonLogin', () => {
  let component: DocButtonLogin;
  let fixture: ComponentFixture<DocButtonLogin>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocButtonLogin],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocButtonLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
