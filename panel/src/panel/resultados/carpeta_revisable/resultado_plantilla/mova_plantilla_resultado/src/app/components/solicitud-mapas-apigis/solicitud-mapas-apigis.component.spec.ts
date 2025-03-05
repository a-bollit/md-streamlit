import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudMapasApigisComponent } from './solicitud-mapas-apigis.component';

describe('SolicitudMapasApigisComponent', () => {
  let component: SolicitudMapasApigisComponent;
  let fixture: ComponentFixture<SolicitudMapasApigisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudMapasApigisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudMapasApigisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
