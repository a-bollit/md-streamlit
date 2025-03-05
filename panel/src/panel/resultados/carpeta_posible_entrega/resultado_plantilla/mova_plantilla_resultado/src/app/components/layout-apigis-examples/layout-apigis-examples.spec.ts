import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApigisExamples } from './layout-apigis-examples.component';

describe('LayoutApigisExamples', () => {
  let component: LayoutApigisExamples;
  let fixture: ComponentFixture<LayoutApigisExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutApigisExamples ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutApigisExamples);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
