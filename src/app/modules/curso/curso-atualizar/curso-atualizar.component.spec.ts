import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoAtualizarComponent } from './curso-atualizar.component';

describe('CursoAtualizarComponent', () => {
  let component: CursoAtualizarComponent;
  let fixture: ComponentFixture<CursoAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
