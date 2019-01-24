import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoInserirComponent } from './curso-inserir/curso-inserir.component';
import { CursoAtualizarComponent } from './curso-atualizar/curso-atualizar.component';
import { CursoIndexComponent } from './curso-index/curso-index.component';
import { CursoService } from './curso.service';


@NgModule({
  declarations: [CursoInserirComponent, CursoAtualizarComponent, CursoIndexComponent],
  imports: [
    CommonModule,
    CursoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ CursoService]
})
export class CursoModule { }
