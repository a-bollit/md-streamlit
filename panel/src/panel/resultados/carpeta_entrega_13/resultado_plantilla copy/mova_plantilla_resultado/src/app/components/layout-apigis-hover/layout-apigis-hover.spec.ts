import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApigisHover } from './layout-apigis-hover.component';

describe('LayoutApigisHover', () => {
  let component: LayoutApigisHover;
  let fixture: ComponentFixture<LayoutApigisHover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutApigisHover ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutApigisHover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
