import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutStaticDataCensus} from './layout-static-data-census.component';

describe('LayoutStaticDataCensus', () => {
  let component: LayoutStaticDataCensus;
  let fixture: ComponentFixture<LayoutStaticDataCensus>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutStaticDataCensus],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutStaticDataCensus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
