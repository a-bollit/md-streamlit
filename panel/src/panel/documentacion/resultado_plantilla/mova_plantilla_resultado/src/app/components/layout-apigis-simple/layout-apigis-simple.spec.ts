import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApigisSimple } from './layout-apigis-simple.component';

describe('LayoutApigisSimple', () => {
  let component: LayoutApigisSimple;
  let fixture: ComponentFixture<LayoutApigisSimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutApigisSimple ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutApigisSimple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
