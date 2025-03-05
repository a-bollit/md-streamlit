import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DocApigisSimplefillsymbol } from "./doc-apigis-simplefillsymbol.component";

describe("DocApigisSimplefillsymbol", () => {
  let component: DocApigisSimplefillsymbol;
  let fixture: ComponentFixture<DocApigisSimplefillsymbol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocApigisSimplefillsymbol],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisSimplefillsymbol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
