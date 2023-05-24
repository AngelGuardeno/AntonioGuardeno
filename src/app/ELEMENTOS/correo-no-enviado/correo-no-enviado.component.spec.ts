import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreoNoEnviadoComponent } from './correo-no-enviado.component';

describe('CorreoNoEnviadoComponent', () => {
  let component: CorreoNoEnviadoComponent;
  let fixture: ComponentFixture<CorreoNoEnviadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorreoNoEnviadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorreoNoEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
