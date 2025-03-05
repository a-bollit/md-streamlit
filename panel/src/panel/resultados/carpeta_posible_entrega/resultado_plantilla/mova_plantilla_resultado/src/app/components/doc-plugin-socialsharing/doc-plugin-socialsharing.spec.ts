import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocPluginSocialsharing} from './doc-plugin-socialsharing.component';

describe('DocPluginSocialsharingComponent', () => {
  let component: DocPluginSocialsharing;
  let fixture: ComponentFixture<DocPluginSocialsharing>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocPluginSocialsharing],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocPluginSocialsharing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
