import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutWizard} from './layout-wizard.component';

describe('LayoutWizard', () => {
  let component: LayoutWizard;
  let fixture: ComponentFixture<LayoutWizard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutWizard],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWizard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
