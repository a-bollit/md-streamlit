import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutWizardMenu} from './layout-wizard-menu.component';

describe('LayoutWizardMenu', () => {
  let component: LayoutWizardMenu;
  let fixture: ComponentFixture<LayoutWizardMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutWizardMenu],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWizardMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
