import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocScheme} from './doc-scheme.component';

describe('DocSchemeComponent', () => {
  let component: DocScheme;
  let fixture: ComponentFixture<DocScheme>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocScheme],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocScheme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
