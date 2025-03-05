import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {
  DocStylesGuideConsiderations,
} from './doc-styles-guide-considerations.component';

describe('DocStylesGuideConsiderations', () => {
  let component: DocStylesGuideConsiderations;
  let fixture: ComponentFixture<DocStylesGuideConsiderations>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocStylesGuideConsiderations],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocStylesGuideConsiderations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
