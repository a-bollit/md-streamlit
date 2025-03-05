import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocSelect} from './doc-select.component';

describe('DocSelect', () => {
  let component: DocSelect;
  let fixture: ComponentFixture<DocSelect>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocSelect],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
