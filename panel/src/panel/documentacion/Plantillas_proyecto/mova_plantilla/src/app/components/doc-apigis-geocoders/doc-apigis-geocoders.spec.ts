import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisGeocoders } from './doc-apigis-geocoders.component';

describe('DocApigisGeocoders', () => {
  let component: DocApigisGeocoders;
  let fixture: ComponentFixture<DocApigisGeocoders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisGeocoders ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisGeocoders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
