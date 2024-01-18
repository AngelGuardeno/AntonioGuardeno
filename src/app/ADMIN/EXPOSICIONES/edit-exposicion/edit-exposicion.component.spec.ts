import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExposicionComponent } from './edit-exposicion.component';

describe('EditExposicionComponent', () => {
  let component: EditExposicionComponent;
  let fixture: ComponentFixture<EditExposicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExposicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExposicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
