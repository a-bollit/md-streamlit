import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisViewer } from './doc-apigis-viewer.component';

describe('DocApigisViewerComponent', () => {
  let component: DocApigisViewer;
  let fixture: ComponentFixture<DocApigisViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisViewer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
