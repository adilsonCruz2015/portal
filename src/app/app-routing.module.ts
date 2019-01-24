import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';


const routes: Routes = [

      {
           path: '',
           redirectTo: 'curso',
           pathMatch:  'full'
      },
      {
           path: 'curso',
           loadChildren: './modules/curso/curso.module#CursoModule'
      },
      {
           path: 'instituto',
           loadChildren: './modules/instituto/instituto.module#InstitutoModule'
      },
      {
           path: '**',
           component: NotFoundComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
