import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocViewportInfo} from './doc-viewport-info.component';

describe('DocViewportInfoComponent', () => {
  let component: DocViewportInfo;
  let fixture: ComponentFixture<DocViewportInfo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocViewportInfo],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocViewportInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
