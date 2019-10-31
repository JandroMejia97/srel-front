import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanchaDetailComponent } from './cancha-detail.component';

describe('CanchaDetailComponent', () => {
  let component: CanchaDetailComponent;
  let fixture: ComponentFixture<CanchaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanchaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanchaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
