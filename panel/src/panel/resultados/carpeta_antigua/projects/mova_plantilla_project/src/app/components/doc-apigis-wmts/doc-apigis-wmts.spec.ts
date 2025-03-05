import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisWMTS } from './doc-apigis-wmts.component';

describe('DocApigisWMTS', () => {
  let component: DocApigisWMTS;
  let fixture: ComponentFixture<DocApigisWMTS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisWMTS ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisWMTS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
