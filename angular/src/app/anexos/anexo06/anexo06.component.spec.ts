import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Anexo06Component } from './anexo06.component';

describe('Anexo06Component', () => {
  let component: Anexo06Component;
  let fixture: ComponentFixture<Anexo06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Anexo06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Anexo06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
