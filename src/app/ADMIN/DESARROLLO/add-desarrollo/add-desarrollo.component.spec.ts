import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesarrolloComponent } from './add-desarrollo.component';

describe('AddDesarrolloComponent', () => {
  let component: AddDesarrolloComponent;
  let fixture: ComponentFixture<AddDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDesarrolloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
