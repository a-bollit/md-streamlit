import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocRadio} from './doc-radio.component';

describe('DocRadio', () => {
  let component: DocRadio;
  let fixture: ComponentFixture<DocRadio>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocRadio],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocRadio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
