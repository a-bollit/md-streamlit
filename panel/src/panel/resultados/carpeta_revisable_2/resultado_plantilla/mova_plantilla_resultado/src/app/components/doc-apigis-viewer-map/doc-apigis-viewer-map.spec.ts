import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DocApigisViewerMap } from "./doc-apigis-viewer-map.component";

describe("DocApigisViewerMap", () => {
  let component: DocApigisViewerMap;
  let fixture: ComponentFixture<DocApigisViewerMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocApigisViewerMap],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisViewerMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
