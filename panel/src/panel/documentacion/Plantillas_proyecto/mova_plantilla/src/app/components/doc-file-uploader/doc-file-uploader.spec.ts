import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocFileUploader} from './doc-file-uploader.component';

describe('DocFileUploaderComponent', () => {
  let component: DocFileUploader;
  let fixture: ComponentFixture<DocFileUploader>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocFileUploader],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocFileUploader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
