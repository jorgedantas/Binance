import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo02Component } from './anexo02.component';

describe('Anexo02Component', () => {
  let component: Anexo02Component;
  let fixture: ComponentFixture<Anexo02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Anexo02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Anexo02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
