import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisMapComponent } from './doc-apigis-map.component';

describe('DocApigisMapComponent', () => {
  let component: DocApigisMapComponent;
  let fixture: ComponentFixture<DocApigisMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
