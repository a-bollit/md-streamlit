import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DocApigisXYZ } from "./doc-apigis-xyz.component";

describe("DocApigisXYZ", () => {
  let component: DocApigisXYZ;
  let fixture: ComponentFixture<DocApigisXYZ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocApigisXYZ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisXYZ);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
