import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoInserirComponent } from './curso-inserir.component';

describe('CursoInserirComponent', () => {
  let component: CursoInserirComponent;
  let fixture: ComponentFixture<CursoInserirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoInserirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
