import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutStaticData} from './layout-static-data.component';

describe('LayoutStaticData', () => {
  let component: LayoutStaticData;
  let fixture: ComponentFixture<LayoutStaticData>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutStaticData],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutStaticData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
