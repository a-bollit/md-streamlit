import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisGuideConsiderations } from './doc-apigis-guide-considerations.component';

describe('DocApigisGuideConsiderations', () => {
  let component: DocApigisGuideConsiderations;
  let fixture: ComponentFixture<DocApigisGuideConsiderations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisGuideConsiderations ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisGuideConsiderations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
