import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisOverlay } from './doc-apigis-overlay.component';

describe('DocApigisOverlay', () => {
  let component: DocApigisOverlay;
  let fixture: ComponentFixture<DocApigisOverlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisOverlay ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisOverlay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
