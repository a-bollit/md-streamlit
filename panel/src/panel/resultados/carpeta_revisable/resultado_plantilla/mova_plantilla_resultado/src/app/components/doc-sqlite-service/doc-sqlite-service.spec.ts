import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocSqliteService} from './doc-sqlite-service.component';

describe('DocSqliteServiceComponent', () => {
  let component: DocSqliteService;
  let fixture: ComponentFixture<DocSqliteService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocSqliteService],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSqliteService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
