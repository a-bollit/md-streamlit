import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisImage } from './doc-apigis-image.component';

describe('DocApigisImage', () => {
  let component: DocApigisImage;
  let fixture: ComponentFixture<DocApigisImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisImage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
