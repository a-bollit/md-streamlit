import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocAppService} from './doc-app-service.component';

describe('DocAppService', () => {
  let component: DocAppService;
  let fixture: ComponentFixture<DocAppService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocAppService],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocAppService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
