import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocDeviceView} from './doc-device-view.component';

describe('DocDeviceView', () => {
  let component: DocDeviceView;
  let fixture: ComponentFixture<DocDeviceView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocDeviceView],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocDeviceView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
