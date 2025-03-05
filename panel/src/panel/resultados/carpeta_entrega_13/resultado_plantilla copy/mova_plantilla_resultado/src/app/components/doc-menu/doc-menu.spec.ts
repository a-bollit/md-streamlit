import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocMenu} from './doc-menu.component';

describe('DocMenu', () => {
  let component: DocMenu;
  let fixture: ComponentFixture<DocMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocMenu],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
