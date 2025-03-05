import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocCompilation} from './doc-compilation.component';

describe('DocCompilationComponent', () => {
  let component: DocCompilation;
  let fixture: ComponentFixture<DocCompilation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocCompilation],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocCompilation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
