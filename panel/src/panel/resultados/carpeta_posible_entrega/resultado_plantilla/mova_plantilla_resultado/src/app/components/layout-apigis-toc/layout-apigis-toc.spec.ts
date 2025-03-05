import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApigisToc } from './layout-apigis-toc.component';

describe('LayoutApigisToc', () => {
  let component: LayoutApigisToc;
  let fixture: ComponentFixture<LayoutApigisToc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutApigisToc ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutApigisToc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
