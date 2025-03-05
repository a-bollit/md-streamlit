import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocEnvironment} from './doc-environment.component';

describe('DocEnvironment', () => {
  let component: DocEnvironment;
  let fixture: ComponentFixture<DocEnvironment>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocEnvironment],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocEnvironment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
