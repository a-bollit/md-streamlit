import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocLandingView} from './doc-landing-view.component';

describe('DocLandingView', () => {
  let component: DocLandingView;
  let fixture: ComponentFixture<DocLandingView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocLandingView],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocLandingView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
