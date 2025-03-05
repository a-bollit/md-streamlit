import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisCatastroComponent } from './doc-apigis-catastro.component';

describe('DocApigisCatastroComponent', () => {
  let component: DocApigisCatastroComponent;
  let fixture: ComponentFixture<DocApigisCatastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisCatastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisCatastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
