import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisPrintComponent } from './doc-apigis-print.component';

describe('DocApigisPrintComponent', () => {
  let component: DocApigisPrintComponent;
  let fixture: ComponentFixture<DocApigisPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
