import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocDatepicker} from './doc-datepicker.component';

describe('DocDatepickerComponent', () => {
  let component: DocDatepicker;
  let fixture: ComponentFixture<DocDatepicker>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocDatepicker],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocDatepicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
