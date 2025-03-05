import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocSwipe} from './doc-swipe.component';

describe('DocSwipe', () => {
  let component: DocSwipe;
  let fixture: ComponentFixture<DocSwipe>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocSwipe],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSwipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
