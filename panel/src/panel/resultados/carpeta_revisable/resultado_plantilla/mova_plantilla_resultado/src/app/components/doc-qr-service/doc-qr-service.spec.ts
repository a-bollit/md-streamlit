import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocQrService} from './doc-qr-service.component';

describe('DocQrServiceComponent', () => {
  let component: DocQrService;
  let fixture: ComponentFixture<DocQrService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocQrService],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocQrService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
