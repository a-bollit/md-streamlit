import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocSnackBar} from './doc-snack-bar.component';

describe('DocSnackBar', () => {
  let component: DocSnackBar;
  let fixture: ComponentFixture<DocSnackBar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocSnackBar],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSnackBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
