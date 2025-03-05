import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocPiwik} from './doc-piwik.component';

describe('DocPiwikComponent', () => {
  let component: DocPiwik;
  let fixture: ComponentFixture<DocPiwik>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocPiwik],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocPiwik);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
