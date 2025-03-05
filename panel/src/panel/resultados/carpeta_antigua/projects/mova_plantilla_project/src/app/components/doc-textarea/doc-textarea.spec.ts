import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocTextarea} from './doc-textarea.component';

describe('DocTextarea', () => {
  let component: DocTextarea;
  let fixture: ComponentFixture<DocTextarea>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocTextarea],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocTextarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
