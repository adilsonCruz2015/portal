import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoIndexComponent } from './curso-index/curso-index.component';
import { CursoAtualizarComponent } from './curso-atualizar/curso-atualizar.component';
import { CursoInserirComponent } from './curso-inserir/curso-inserir.component';


const routes: Routes = [
      
     {
          path: '',
          component: CursoIndexComponent
     },
     {
          path: 'id/atualizar',
          component: CursoAtualizarComponent
     },
     {
          path: 'inserir',
          component: CursoInserirComponent
     }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
