import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocDeviceService} from './doc-device-service.component';

describe('DocDeviceServiceComponent', () => {
  let component: DocDeviceService;
  let fixture: ComponentFixture<DocDeviceService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocDeviceService],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocDeviceService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
