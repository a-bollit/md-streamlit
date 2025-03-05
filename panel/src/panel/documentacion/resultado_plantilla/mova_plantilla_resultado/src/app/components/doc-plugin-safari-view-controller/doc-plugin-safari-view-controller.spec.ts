import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocPluginSafariViewController} from './doc-plugin-safari-view-controller.component';

describe('DocPluginSafariViewControllerComponent', () => {
  let component: DocPluginSafariViewController;
  let fixture: ComponentFixture<DocPluginSafariViewController>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocPluginSafariViewController],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocPluginSafariViewController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
