import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApigisGeocoder } from './layout-apigis-geocoder.component';

describe('LayoutApigisGeocoder', () => {
  let component: LayoutApigisGeocoder;
  let fixture: ComponentFixture<LayoutApigisGeocoder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutApigisGeocoder ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutApigisGeocoder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
