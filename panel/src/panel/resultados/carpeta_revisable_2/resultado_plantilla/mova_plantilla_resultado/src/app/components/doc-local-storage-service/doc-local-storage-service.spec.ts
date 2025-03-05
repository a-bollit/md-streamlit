import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocLocalStorageService} from './doc-local-storage-service.component';

describe('DocLocalStorageService', () => {
  let component: DocLocalStorageService;
  let fixture: ComponentFixture<DocLocalStorageService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocLocalStorageService],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocLocalStorageService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
