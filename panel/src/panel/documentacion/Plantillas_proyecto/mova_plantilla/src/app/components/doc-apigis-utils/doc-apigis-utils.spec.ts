import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisUtilsComponent } from './doc-apigis-utils.component';

describe('DocApigisUtilsComponent', () => {
  let component: DocApigisUtilsComponent;
  let fixture: ComponentFixture<DocApigisUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisUtilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
