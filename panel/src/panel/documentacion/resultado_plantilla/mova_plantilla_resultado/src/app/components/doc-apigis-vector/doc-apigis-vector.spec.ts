import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DocApigisVector } from "./doc-apigis-vector.component";

describe("DocApigisVector", () => {
  let component: DocApigisVector;
  let fixture: ComponentFixture<DocApigisVector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocApigisVector],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisVector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
