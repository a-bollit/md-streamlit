import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocnotificationWebPush } from './doc-notification-web-push.component';

describe('DocnotificationWebPush', () => {
  let component: DocnotificationWebPush;
  let fixture: ComponentFixture<DocnotificationWebPush>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocnotificationWebPush ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocnotificationWebPush);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
