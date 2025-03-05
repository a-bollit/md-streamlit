import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApigisIdentify } from './layout-apigis-identify.component';

describe('LayoutApigisIdentify', () => {
  let component: LayoutApigisIdentify;
  let fixture: ComponentFixture<LayoutApigisIdentify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutApigisIdentify ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutApigisIdentify);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
