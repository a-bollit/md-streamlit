import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocStylesGuideIcons} from './doc-styles-guide-icons.component';

describe('DocStylesGuideIcons', () => {
  let component: DocStylesGuideIcons;
  let fixture: ComponentFixture<DocStylesGuideIcons>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocStylesGuideIcons],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocStylesGuideIcons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
