import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutHealthExample} from './layout-health-example.component';

describe('LayoutHealthExample', () => {
  let component: LayoutHealthExample;
  let fixture: ComponentFixture<LayoutHealthExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutHealthExample],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutHealthExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
