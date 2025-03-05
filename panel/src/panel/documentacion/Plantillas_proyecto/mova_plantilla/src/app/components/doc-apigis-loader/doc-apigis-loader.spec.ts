import { ComponentFixture, TestBed} from "@angular/core/testing";

import { DocApigisLoader} from "./doc-apigis-loader.component";

describe("DocApigisLoader", () => {
  let component: DocApigisLoader;
  let fixture: ComponentFixture<DocApigisLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocApigisLoader],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
