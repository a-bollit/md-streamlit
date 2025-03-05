import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocButton} from './doc-button.component';

describe('DocButton', () => {
  let component: DocButton;
  let fixture: ComponentFixture<DocButton>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocButton],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
