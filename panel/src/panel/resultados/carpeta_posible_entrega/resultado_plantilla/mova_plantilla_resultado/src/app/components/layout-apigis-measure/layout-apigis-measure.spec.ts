import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApigisMeasure } from './layout-apigis-measure.component';

describe('LayoutApigisMeasure', () => {
  let component: LayoutApigisMeasure;
  let fixture: ComponentFixture<LayoutApigisMeasure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutApigisMeasure ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutApigisMeasure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
