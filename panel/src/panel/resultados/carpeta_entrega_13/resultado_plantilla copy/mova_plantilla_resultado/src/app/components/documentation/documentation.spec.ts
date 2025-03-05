import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Documentation} from './documentation.component';

describe('Documentation', () => {
  let component: Documentation;
  let fixture: ComponentFixture<Documentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Documentation],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Documentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
