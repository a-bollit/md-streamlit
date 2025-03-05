import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutStaticDataReport} from './layout-static-data-report.component';

describe('LayoutStaticDataReport', () => {
  let component: LayoutStaticDataReport;
  let fixture: ComponentFixture<LayoutStaticDataReport>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutStaticDataReport],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutStaticDataReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
