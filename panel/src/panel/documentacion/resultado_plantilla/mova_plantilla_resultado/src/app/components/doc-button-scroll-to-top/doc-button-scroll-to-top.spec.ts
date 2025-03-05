import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocButtonScrollToTop} from './doc-button-scroll-to-top.component';

describe('DocButtonScrollToTop', () => {
  let component: DocButtonScrollToTop;
  let fixture: ComponentFixture<DocButtonScrollToTop>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocButtonScrollToTop],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocButtonScrollToTop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
