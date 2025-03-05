import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocProtectionView} from './doc-protection-view.component';

describe('DocProtectionViewComponent', () => {
  let component: DocProtectionView;
  let fixture: ComponentFixture<DocProtectionView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocProtectionView],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocProtectionView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
