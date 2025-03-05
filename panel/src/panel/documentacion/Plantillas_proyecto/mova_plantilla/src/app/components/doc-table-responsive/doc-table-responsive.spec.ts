import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocTableResponsive} from './doc-table-responsive.component';

describe('DocTableResponsive', () => {
  let component: DocTableResponsive;
  let fixture: ComponentFixture<DocTableResponsive>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocTableResponsive],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocTableResponsive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
