import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutFooterMvMenu} from './layout-footer-mv-menu.component';

describe('LayoutFooterMvMenu', () => {
  let component: LayoutFooterMvMenu;
  let fixture: ComponentFixture<LayoutFooterMvMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutFooterMvMenu],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutFooterMvMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
