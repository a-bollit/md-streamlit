import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocCryptoService} from './doc-crypto-service.component';

describe('DocCryptoServiceComponent', () => {
  let component: DocCryptoService;
  let fixture: ComponentFixture<DocCryptoService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocCryptoService],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocCryptoService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
