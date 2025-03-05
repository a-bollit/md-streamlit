import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocConfigDefault} from './doc-config-default.component';

describe('DocConfigDefault', () => {
  let component: DocConfigDefault;
  let fixture: ComponentFixture<DocConfigDefault>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocConfigDefault],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocConfigDefault);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
