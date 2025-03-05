import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutStaticDataBill} from './layout-static-data-bill.component';

describe('LayoutStaticDataBill', () => {
  let component: LayoutStaticDataBill;
  let fixture: ComponentFixture<LayoutStaticDataBill>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutStaticDataBill],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutStaticDataBill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
