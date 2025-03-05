import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocIconsSplashscreen} from './doc-icons-splashscreen.component';

describe('DocIconsSplashscreenComponent', () => {
  let component: DocIconsSplashscreen;
  let fixture: ComponentFixture<DocIconsSplashscreen>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocIconsSplashscreen],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocIconsSplashscreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
