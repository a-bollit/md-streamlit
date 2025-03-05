import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocRateView} from './doc-rate-view.component';

describe('DocRateViewComponent', () => {
  let component: DocRateView;
  let fixture: ComponentFixture<DocRateView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocRateView],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocRateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
