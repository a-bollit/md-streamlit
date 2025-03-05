import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsReactiveValidationNoMenu} from './forms-reactive-validation-no-menu.component';

describe('FormsReactiveValidationNoMenu', () => {
  let component: FormsReactiveValidationNoMenu;
  let fixture: ComponentFixture<FormsReactiveValidationNoMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsReactiveValidationNoMenu],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsReactiveValidationNoMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
