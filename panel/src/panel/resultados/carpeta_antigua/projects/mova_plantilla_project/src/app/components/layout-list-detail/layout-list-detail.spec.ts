import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutListDetail} from './layout-list-detail.component';

describe('LayoutListDetail', () => {
  let component: LayoutListDetail;
  let fixture: ComponentFixture<LayoutListDetail>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutListDetail],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutListDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
