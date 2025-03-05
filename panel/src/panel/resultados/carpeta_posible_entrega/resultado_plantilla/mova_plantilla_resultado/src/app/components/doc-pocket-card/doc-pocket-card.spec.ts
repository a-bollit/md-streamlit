import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocPocketCard} from './doc-pocket-card.component';

describe('DocPocketCardComponent', () => {
  let component: DocPocketCard;
  let fixture: ComponentFixture<DocPocketCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocPocketCard],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocPocketCard,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
