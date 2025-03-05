import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocComponentTheme} from './doc-component-theme.component';

describe('DocComponentTheme', () => {
  let component: DocComponentTheme;
  let fixture: ComponentFixture<DocComponentTheme>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocComponentTheme],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocComponentTheme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
