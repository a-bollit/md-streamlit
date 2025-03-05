import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocXHRDownload} from './doc-xhr-download.component';

describe('DocXHRDownloadComponent', () => {
  let component: DocXHRDownload;
  let fixture: ComponentFixture<DocXHRDownload>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocXHRDownload],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocXHRDownload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
