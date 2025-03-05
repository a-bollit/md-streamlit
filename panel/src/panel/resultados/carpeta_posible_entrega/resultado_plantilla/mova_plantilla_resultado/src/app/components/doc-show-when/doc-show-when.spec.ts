import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocShowWhen} from './doc-show-when.component';

describe('DocShowWhen', () => {
  let component: DocShowWhen;
  let fixture: ComponentFixture<DocShowWhen>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocShowWhen],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocShowWhen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
