import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DocApigisVectortile } from "./doc-apigis-vectortile.component";

describe("DocApigisVectortile", () => {
  let component: DocApigisVectortile;
  let fixture: ComponentFixture<DocApigisVectortile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocApigisVectortile],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisVectortile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
