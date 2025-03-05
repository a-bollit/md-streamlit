import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutTableResponsive} from './layout-table-responsive.component';

describe('LayoutTableResponsive', () => {
  let component: LayoutTableResponsive;
  let fixture: ComponentFixture<LayoutTableResponsive>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutTableResponsive],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTableResponsive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
