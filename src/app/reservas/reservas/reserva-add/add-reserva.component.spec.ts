import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReservaComponent } from './reserva-add.component';

describe('AddReservaComponent', () => {
  let component: AddReservaComponent;
  let fixture: ComponentFixture<AddReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
