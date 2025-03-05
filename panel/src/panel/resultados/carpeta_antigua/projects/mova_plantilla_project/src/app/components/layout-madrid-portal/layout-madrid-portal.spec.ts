import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutMadridPortal} from './layout-madrid-portal.component';

describe('LayoutMadridPortal', () => {
  let component: LayoutMadridPortal;
  let fixture: ComponentFixture<LayoutMadridPortal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutMadridPortal],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMadridPortal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
