import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDesarrolloComponent } from './edit-desarrollo.component';

describe('EditDesarrolloComponent', () => {
  let component: EditDesarrolloComponent;
  let fixture: ComponentFixture<EditDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDesarrolloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
