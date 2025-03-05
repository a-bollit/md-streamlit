import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisSimplelinesymbol } from './doc-apigis-simplelinesymbol.component';

describe('DocApigisSimplelinesymbol', () => {
  let component: DocApigisSimplelinesymbol;
  let fixture: ComponentFixture<DocApigisSimplelinesymbol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisSimplelinesymbol ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisSimplelinesymbol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
