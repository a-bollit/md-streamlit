import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocExternalLibraries} from './doc-external-libraries.component';

describe('DocExternalLibrariesComponent', () => {
  let component: DocExternalLibraries;
  let fixture: ComponentFixture<DocExternalLibraries>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocExternalLibraries],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocExternalLibraries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
