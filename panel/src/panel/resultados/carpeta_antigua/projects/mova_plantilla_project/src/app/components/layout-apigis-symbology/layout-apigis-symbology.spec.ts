import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApigisSymbology } from './layout-apigis-symbology.component';

describe('LayoutApigisSymbology', () => {
  let component: LayoutApigisSymbology;
  let fixture: ComponentFixture<LayoutApigisSymbology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutApigisSymbology ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutApigisSymbology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
