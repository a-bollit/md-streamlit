import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutHealthExample2} from './layout-health-example2.component';

describe('LayoutHealthExample2', () => {
  let component: LayoutHealthExample2;
  let fixture: ComponentFixture<LayoutHealthExample2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutHealthExample2],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutHealthExample2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
