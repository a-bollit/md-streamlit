import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocInAppBrowser} from './doc-inappbrowser.component';

describe('DocInAppBrowserComponent', () => {
  let component: DocInAppBrowser;
  let fixture: ComponentFixture<DocInAppBrowser>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocInAppBrowser],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocInAppBrowser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
