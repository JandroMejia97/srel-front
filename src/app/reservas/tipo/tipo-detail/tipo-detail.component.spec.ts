import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDetailComponent } from './tipo-detail.component';

describe('TipoDetailComponent', () => {
  let component: TipoDetailComponent;
  let fixture: ComponentFixture<TipoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
