import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensageiroComponent } from './mensageiro.component';

describe('MensageiroComponent', () => {
  let component: MensageiroComponent;
  let fixture: ComponentFixture<MensageiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensageiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
