import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocStylesGuideGrid12} from './doc-styles-guide-grid12.component';

describe('DocStylesGuideGrid12', () => {
  let component: DocStylesGuideGrid12;
  let fixture: ComponentFixture<DocStylesGuideGrid12>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocStylesGuideGrid12],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocStylesGuideGrid12);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
