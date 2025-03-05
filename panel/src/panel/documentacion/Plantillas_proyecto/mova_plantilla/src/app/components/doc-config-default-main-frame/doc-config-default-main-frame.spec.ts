import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {
  DocConfigDefaultMainFrame,
} from './doc-config-default-main-frame.component';

describe('DocConfigDefaultMainFrame', () => {
  let component: DocConfigDefaultMainFrame;
  let fixture: ComponentFixture<DocConfigDefaultMainFrame>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocConfigDefaultMainFrame],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocConfigDefaultMainFrame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
