import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisIntegration } from './doc-apigis-integration.component';

describe('DocApigisIntegration', () => {
  let component: DocApigisIntegration;
  let fixture: ComponentFixture<DocApigisIntegration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisIntegration ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisIntegration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
