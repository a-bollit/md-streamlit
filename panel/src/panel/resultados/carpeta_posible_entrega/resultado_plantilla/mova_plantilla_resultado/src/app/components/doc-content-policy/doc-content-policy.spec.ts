import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocContentPolicy} from './doc-content-policy.component';

describe('DocContentPolicyComponent', () => {
  let component: DocContentPolicy;
  let fixture: ComponentFixture<DocContentPolicy>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocContentPolicy],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocContentPolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
