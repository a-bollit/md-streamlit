import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NotificationConfigView} from './notification-config-view.component';

describe('NotificationConfigView', () => {
  let component: NotificationConfigView;
  let fixture: ComponentFixture<NotificationConfigView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationConfigView],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationConfigView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
