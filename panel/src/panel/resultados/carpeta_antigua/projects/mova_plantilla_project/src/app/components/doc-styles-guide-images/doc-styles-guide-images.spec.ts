import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocStylesGuideImages} from './doc-styles-guide-images.component';

describe('DocStylesGuideImages', () => {
  let component: DocStylesGuideImages;
  let fixture: ComponentFixture<DocStylesGuideImages>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocStylesGuideImages],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocStylesGuideImages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
