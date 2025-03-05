import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocBirthdate} from './doc-birthdate.component';

describe('DocBirthdate', () => {
  let component: DocBirthdate;
  let fixture: ComponentFixture<DocBirthdate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocBirthdate],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocBirthdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
