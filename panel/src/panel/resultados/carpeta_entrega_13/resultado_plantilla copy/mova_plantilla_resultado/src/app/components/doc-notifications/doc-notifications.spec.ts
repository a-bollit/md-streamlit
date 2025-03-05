import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocNotifications} from './doc-notifications.component';

describe('DocNotifications', () => {
  let component: DocNotifications;
  let fixture: ComponentFixture<DocNotifications>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocNotifications],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocNotifications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
