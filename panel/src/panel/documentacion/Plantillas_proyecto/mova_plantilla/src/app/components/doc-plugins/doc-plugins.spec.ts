import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocPlugins} from './doc-plugins.component';

describe('DocPluginsComponent', () => {
  let component: DocPlugins;
  let fixture: ComponentFixture<DocPlugins>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocPlugins],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocPlugins);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
