import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCorreoComponent } from './formulario-correo.component';

describe('FormularioCorreoComponent', () => {
  let component: FormularioCorreoComponent;
  let fixture: ComponentFixture<FormularioCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCorreoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
