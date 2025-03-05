import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocLastNotifications} from './doc-last-notifications.component';

describe('DocLastNotificationsComponent', () => {
  let component: DocLastNotifications;
  let fixture: ComponentFixture<DocLastNotifications>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocLastNotifications],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocLastNotifications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
