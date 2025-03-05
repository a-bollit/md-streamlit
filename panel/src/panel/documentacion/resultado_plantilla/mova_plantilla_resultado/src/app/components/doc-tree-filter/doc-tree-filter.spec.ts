import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocTreeFilter} from './doc-tree-filter.component';

describe('DocTreeFilter', () => {
  let component: DocTreeFilter;
  let fixture: ComponentFixture<DocTreeFilter>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocTreeFilter],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocTreeFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
