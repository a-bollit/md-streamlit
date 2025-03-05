import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutWizardTop} from './layout-wizard-top.component';

describe('LayoutWizardTop', () => {
  let component: LayoutWizardTop;
  let fixture: ComponentFixture<LayoutWizardTop>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutWizardTop],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWizardTop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
