import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocAccessibility} from './doc-accessibility.component';

describe('DocAccessibility', () => {
  let component: DocAccessibility;
  let fixture: ComponentFixture<DocAccessibility>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocAccessibility],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocAccessibility);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
