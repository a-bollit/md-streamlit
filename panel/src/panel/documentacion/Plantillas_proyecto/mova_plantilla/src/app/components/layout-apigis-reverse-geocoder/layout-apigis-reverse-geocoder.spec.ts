import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApigisReverseGeocoder } from './layout-apigis-reverse-geocoder.component';

describe('LayoutApigisReverseGeocoder', () => {
  let component: LayoutApigisReverseGeocoder;
  let fixture: ComponentFixture<LayoutApigisReverseGeocoder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutApigisReverseGeocoder ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutApigisReverseGeocoder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
