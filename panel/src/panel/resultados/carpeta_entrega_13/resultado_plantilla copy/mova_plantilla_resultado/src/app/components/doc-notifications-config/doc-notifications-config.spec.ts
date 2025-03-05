import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocNotificationsConfig} from './doc-notifications-config.component';

describe('DocNotificationsConfig', () => {
  let component: DocNotificationsConfig;
  let fixture: ComponentFixture<DocNotificationsConfig>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocNotificationsConfig],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocNotificationsConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
