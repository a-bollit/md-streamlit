import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {
  DocSessionStorageService,
} from './doc-session-storage-service.component';

describe('DocSessionStorageService', () => {
  let component: DocSessionStorageService;
  let fixture: ComponentFixture<DocSessionStorageService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocSessionStorageService],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSessionStorageService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
