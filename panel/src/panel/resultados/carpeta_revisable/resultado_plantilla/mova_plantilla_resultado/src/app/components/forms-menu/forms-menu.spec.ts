import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsMenu} from './forms-menu.component';

describe('FormsMenu', () => {
  let component: FormsMenu;
  let fixture: ComponentFixture<FormsMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsMenu],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
