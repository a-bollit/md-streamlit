import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutMenusExample2} from './layout-menus-example2.component';

describe('LayoutMenusExample2', () => {
  let component: LayoutMenusExample2;
  let fixture: ComponentFixture<LayoutMenusExample2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutMenusExample2],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMenusExample2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
