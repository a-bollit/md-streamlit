import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocDialog} from './doc-dialog.component';

describe('DocDialogComponent', () => {
  let component: DocDialog;
  let fixture: ComponentFixture<DocDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocDialog],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
