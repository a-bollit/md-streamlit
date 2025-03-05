import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocApigisTile } from './doc-apigis-tile.component';

describe('DocApigisTile', () => {
  let component: DocApigisTile;
  let fixture: ComponentFixture<DocApigisTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocApigisTile ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocApigisTile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
