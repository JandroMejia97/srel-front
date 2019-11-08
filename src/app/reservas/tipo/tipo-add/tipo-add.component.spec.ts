import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAddComponent } from './tipo-add.component';

describe('TipoAddComponent', () => {
  let component: TipoAddComponent;
  let fixture: ComponentFixture<TipoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
