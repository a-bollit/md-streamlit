import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApigisCluster } from './layout-apigis-cluster.component';

describe('LayoutApigisCluster', () => {
  let component: LayoutApigisCluster;
  let fixture: ComponentFixture<LayoutApigisCluster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutApigisCluster ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutApigisCluster);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
