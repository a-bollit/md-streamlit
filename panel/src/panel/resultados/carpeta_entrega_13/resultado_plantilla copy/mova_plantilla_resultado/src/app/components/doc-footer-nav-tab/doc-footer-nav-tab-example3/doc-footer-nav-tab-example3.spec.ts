import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocFooterNavTab} from './doc-footer-nav-tab.component';

describe('DocFooterNavTabComponent', () => {
  let component: DocFooterNavTab;
  let fixture: ComponentFixture<DocFooterNavTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocFooterNavTab],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocFooterNavTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
