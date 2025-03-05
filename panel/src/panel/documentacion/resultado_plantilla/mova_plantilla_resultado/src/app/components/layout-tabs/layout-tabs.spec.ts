import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutTabs} from './layout-tabs.component';

describe('LayoutTabs', () => {
  let component: LayoutTabs;
  let fixture: ComponentFixture<LayoutTabs>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutTabs],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
