import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocDeeplinks} from './doc-deeplinks.component';

describe('DocDeeplinksComponent', () => {
  let component: DocDeeplinks;
  let fixture: ComponentFixture<DocDeeplinks>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocDeeplinks],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocDeeplinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
