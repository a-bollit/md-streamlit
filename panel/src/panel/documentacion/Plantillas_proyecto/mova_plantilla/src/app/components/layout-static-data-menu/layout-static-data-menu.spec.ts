import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutStaticDataMenu} from './layout-static-data-menu.component';

describe('LayoutStaticDataMenu', () => {
  let component: LayoutStaticDataMenu;
  let fixture: ComponentFixture<LayoutStaticDataMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutStaticDataMenu],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutStaticDataMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
