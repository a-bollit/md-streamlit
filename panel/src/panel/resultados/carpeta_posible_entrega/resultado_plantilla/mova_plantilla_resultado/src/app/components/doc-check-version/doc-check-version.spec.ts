import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocCheckVersion} from './doc-check-version.component';

describe('DocCheckVersionComponent', () => {
  let component: DocCheckVersion;
  let fixture: ComponentFixture<DocCheckVersion>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocCheckVersion],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocCheckVersion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
