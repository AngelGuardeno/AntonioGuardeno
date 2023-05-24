import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCuadroComponent } from './edit-cuadro.component';

describe('EditCuadroComponent', () => {
  let component: EditCuadroComponent;
  let fixture: ComponentFixture<EditCuadroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCuadroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCuadroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
