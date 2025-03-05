import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocHttpRequest} from './doc-http-request.component';

describe('DocHttpRequestComponent', () => {
  let component: DocHttpRequest;
  let fixture: ComponentFixture<DocHttpRequest>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocHttpRequest],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocHttpRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
