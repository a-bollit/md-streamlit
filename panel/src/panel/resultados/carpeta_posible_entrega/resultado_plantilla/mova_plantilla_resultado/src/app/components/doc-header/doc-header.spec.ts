import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocHeader} from './doc-header.component';

describe('DocHeaderComponent', () => {
  let component: DocHeader;
  let fixture: ComponentFixture<DocHeader>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocHeader],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
