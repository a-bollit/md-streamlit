import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocVersionNews} from './doc-version-news.component';

describe('DocVersionNewsComponent', () => {
  let component: DocVersionNews;
  let fixture: ComponentFixture<DocVersionNews>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocVersionNews],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocVersionNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
