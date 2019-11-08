import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoListComponent } from './tipo-list.component';

describe('TipoListComponent', () => {
  let component: TipoListComponent;
  let fixture: ComponentFixture<TipoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
