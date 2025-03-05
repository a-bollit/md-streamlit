import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutMadridInvest} from './layout-madrid-invest.component';

describe('LayoutMadridInvest', () => {
  let component: LayoutMadridInvest;
  let fixture: ComponentFixture<LayoutMadridInvest>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutMadridInvest],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMadridInvest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
