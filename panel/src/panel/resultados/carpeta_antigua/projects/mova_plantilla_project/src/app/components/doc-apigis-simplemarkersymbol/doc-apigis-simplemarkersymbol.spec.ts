import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisSimplemarkersymbol } from './doc-apigis-simplemarkersymbol.component';

describe('DocApigisSimplemarkersymbol', () => {
  let component: DocApigisSimplemarkersymbol;
  let fixture: ComponentFixture<DocApigisSimplemarkersymbol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisSimplemarkersymbol ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisSimplemarkersymbol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
