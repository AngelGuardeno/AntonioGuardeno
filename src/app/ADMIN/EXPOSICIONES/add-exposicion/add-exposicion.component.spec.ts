import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExposicionComponent } from './add-exposicion.component';

describe('AddExposicionComponent', () => {
  let component: AddExposicionComponent;
  let fixture: ComponentFixture<AddExposicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExposicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExposicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
