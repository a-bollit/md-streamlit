import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocFooterTab} from './doc-footer-tab.component';

describe('DocFooterTabComponent', () => {
  let component: DocFooterTab;
  let fixture: ComponentFixture<DocFooterTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocFooterTab],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocFooterTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
