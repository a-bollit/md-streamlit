import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationApigis } from './documentation-apigis.component';

describe('DocumentationApigis', () => {
  let component: DocumentationApigis;
  let fixture: ComponentFixture<DocumentationApigis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationApigis ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationApigis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
