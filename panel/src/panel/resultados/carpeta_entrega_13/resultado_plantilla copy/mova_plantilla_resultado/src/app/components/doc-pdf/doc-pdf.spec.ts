import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocPdf} from './doc-pdf.component';

describe('DocPdfComponent', () => {
  let component: DocPdf;
  let fixture: ComponentFixture<DocPdf>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocPdf],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocPdf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
