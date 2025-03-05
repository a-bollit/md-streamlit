import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisDependencies } from './doc-apigis-dependencies.component';

describe('DocApigisDependencies', () => {
  let component: DocApigisDependencies;
  let fixture: ComponentFixture<DocApigisDependencies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisDependencies ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisDependencies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
