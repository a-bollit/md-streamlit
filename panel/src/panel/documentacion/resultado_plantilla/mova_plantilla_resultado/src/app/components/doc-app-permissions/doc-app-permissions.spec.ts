import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocAppPermissions} from './doc-app-permissions.component';

describe('DocDeeplinksComponent', () => {
  let component: DocAppPermissions;
  let fixture: ComponentFixture<DocAppPermissions>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocAppPermissions],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocAppPermissions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
