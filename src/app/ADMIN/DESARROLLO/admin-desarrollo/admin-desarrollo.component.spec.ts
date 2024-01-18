import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDesarrolloComponent } from './admin-desarrollo.component';

describe('AdminDesarrolloComponent', () => {
  let component: AdminDesarrolloComponent;
  let fixture: ComponentFixture<AdminDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDesarrolloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
