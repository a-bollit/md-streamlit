import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutMenus} from './layout-menus.component';

describe('LayoutMenus', () => {
  let component: LayoutMenus;
  let fixture: ComponentFixture<LayoutMenus>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutMenus],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMenus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
