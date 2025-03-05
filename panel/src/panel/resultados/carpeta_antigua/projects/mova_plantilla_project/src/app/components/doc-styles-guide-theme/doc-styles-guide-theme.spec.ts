import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocStylesGuideTheme} from './doc-styles-guide-theme.component';

describe('DocStylesGuideTheme', () => {
  let component: DocStylesGuideTheme;
  let fixture: ComponentFixture<DocStylesGuideTheme>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocStylesGuideTheme],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocStylesGuideTheme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
