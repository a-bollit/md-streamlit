import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApigisFilters } from './layout-apigis-filters.component';

describe('LayoutApigisFilters', () => {
  let component: LayoutApigisFilters;
  let fixture: ComponentFixture<LayoutApigisFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutApigisFilters ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutApigisFilters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
