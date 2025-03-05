import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {
  DocStylesGuideTypography,
} from './doc-styles-guide-typography.component';

describe('DocStylesGuideTypography', () => {
  let component: DocStylesGuideTypography;
  let fixture: ComponentFixture<DocStylesGuideTypography>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocStylesGuideTypography],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocStylesGuideTypography);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
