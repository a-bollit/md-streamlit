import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocWebappIcon} from './doc-webapp-icon.component';

describe('DocWebappIconComponent', () => {
  let component: DocWebappIcon;
  let fixture: ComponentFixture<DocWebappIcon>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocWebappIcon],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocWebappIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
