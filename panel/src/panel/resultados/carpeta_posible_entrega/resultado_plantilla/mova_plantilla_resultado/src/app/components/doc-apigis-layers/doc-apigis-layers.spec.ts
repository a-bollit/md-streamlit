import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisLayersComponent } from './doc-apigis-layers.component';

describe('DocApigisLayersComponent', () => {
  let component: DocApigisLayersComponent;
  let fixture: ComponentFixture<DocApigisLayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisLayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
