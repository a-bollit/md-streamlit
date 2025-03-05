import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocInput} from './doc-input.component';

describe('DocInput', () => {
  let component: DocInput;
  let fixture: ComponentFixture<DocInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocInput],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
