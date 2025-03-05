import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutRealStatePortal} from './layout-real-state-portal.component';

describe('LayoutRealStatePortal', () => {
  let component: LayoutRealStatePortal;
  let fixture: ComponentFixture<LayoutRealStatePortal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutRealStatePortal],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutRealStatePortal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
