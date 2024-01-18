import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExposicionesComponent } from './admin-exposiciones.component';

describe('AdminExposicionesComponent', () => {
  let component: AdminExposicionesComponent;
  let fixture: ComponentFixture<AdminExposicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminExposicionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminExposicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
