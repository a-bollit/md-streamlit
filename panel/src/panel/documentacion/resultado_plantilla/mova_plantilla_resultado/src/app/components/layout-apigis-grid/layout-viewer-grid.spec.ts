import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApigisGrid } from './layout-apigis-grid.component';

describe('LayoutApigisGrid', () => {
  let component: LayoutApigisGrid;
  let fixture: ComponentFixture<LayoutApigisGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutApigisGrid ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutApigisGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
