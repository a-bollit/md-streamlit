import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocPlatformConsiderations} from './doc-platform-considerations.component';

describe('DocPlatformConsiderationsComponent', () => {
  let component: DocPlatformConsiderations;
  let fixture: ComponentFixture<DocPlatformConsiderations>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocPlatformConsiderations],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocPlatformConsiderations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
