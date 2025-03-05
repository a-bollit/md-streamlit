import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocValuesList} from './doc-values-list.component';

describe('DocValuesList', () => {
  let component: DocValuesList;
  let fixture: ComponentFixture<DocValuesList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocValuesList],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocValuesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
