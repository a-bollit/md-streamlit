import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisFiltersComponent } from './doc-apigis-filters.component';

describe('DocApigisFiltersComponent', () => {
  let component: DocApigisFiltersComponent;
  let fixture: ComponentFixture<DocApigisFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
