import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocDropdownMenu} from './doc-dropdown-menu.component';

describe('DocDropdownMenu', () => {
  let component: DocDropdownMenu;
  let fixture: ComponentFixture<DocDropdownMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocDropdownMenu],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocDropdownMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
