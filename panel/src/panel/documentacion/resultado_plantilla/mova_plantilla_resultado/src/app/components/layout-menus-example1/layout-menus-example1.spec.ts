import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutMenusExample1} from './layout-menus-example1.component';

describe('LayoutMenusExample1', () => {
  let component: LayoutMenusExample1;
  let fixture: ComponentFixture<LayoutMenusExample1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutMenusExample1],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMenusExample1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
