import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DocApigisServers } from "./doc-apigis-servers.component";

describe("DocApigisServers", () => {
  let component: DocApigisServers;
  let fixture: ComponentFixture<DocApigisServers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocApigisServers],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisServers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
