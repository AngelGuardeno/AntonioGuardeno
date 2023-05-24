import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCuadroComponent } from './add-cuadro.component';

describe('AddCuadroComponent', () => {
  let component: AddCuadroComponent;
  let fixture: ComponentFixture<AddCuadroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCuadroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCuadroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
