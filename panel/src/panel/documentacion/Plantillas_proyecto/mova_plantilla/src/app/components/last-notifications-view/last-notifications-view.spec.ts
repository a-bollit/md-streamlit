import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LastNotificationView} from './last-notifications-view.component';

describe('LastNotificationView', () => {
  let component: LastNotificationView;
  let fixture: ComponentFixture<LastNotificationView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LastNotificationView],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNotificationView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
