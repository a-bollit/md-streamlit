import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocCheckbox} from './doc-checkbox.component';

describe('DocCheckboxComponent', () => {
  let component: DocCheckbox;
  let fixture: ComponentFixture<DocCheckbox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocCheckbox],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
