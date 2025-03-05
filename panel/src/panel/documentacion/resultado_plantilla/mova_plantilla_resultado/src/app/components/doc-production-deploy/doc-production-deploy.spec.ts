import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocProductionDeploy} from './doc-production-deploy.component';

describe('DocProductionDeployComponent', () => {
  let component: DocProductionDeploy;
  let fixture: ComponentFixture<DocProductionDeploy>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocProductionDeploy],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocProductionDeploy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
