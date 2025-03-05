import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutResponsive} from './layout-responsive.component';

describe('LayoutResponsive', () => {
  let component: LayoutResponsive;
  let fixture: ComponentFixture<LayoutResponsive>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutResponsive],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutResponsive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
