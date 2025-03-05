import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocInitView} from './doc-init-view.component';

describe('DocInitView', () => {
  let component: DocInitView;
  let fixture: ComponentFixture<DocInitView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocInitView],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocInitView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
