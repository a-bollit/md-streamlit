import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocLoginView} from './doc-login-view.component';

describe('DocLoginView', () => {
  let component: DocLoginView;
  let fixture: ComponentFixture<DocLoginView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocLoginView],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocLoginView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
