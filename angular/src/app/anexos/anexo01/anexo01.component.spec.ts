import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo01Component } from './anexo01.component';

describe('Anexo01Component', () => {
  let component: Anexo01Component;
  let fixture: ComponentFixture<Anexo01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Anexo01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Anexo01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
