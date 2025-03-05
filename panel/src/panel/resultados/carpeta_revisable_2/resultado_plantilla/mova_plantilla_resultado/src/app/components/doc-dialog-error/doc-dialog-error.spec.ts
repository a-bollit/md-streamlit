import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocDialogError} from './doc-dialog-error.component';

describe('DocDialogErrorComponent', () => {
  let component: DocDialogError;
  let fixture: ComponentFixture<DocDialogError>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocDialogError],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocDialogError);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
