import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApigisDraw } from './layout-apigis-draw.component';

describe('LayoutApigisDraw', () => {
  let component: LayoutApigisDraw;
  let fixture: ComponentFixture<LayoutApigisDraw>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutApigisDraw ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutApigisDraw);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
