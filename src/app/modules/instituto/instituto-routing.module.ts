import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutiInfoComponent } from './instituti-info/instituti-info.component';

const routes: Routes = [

      {
            path: 'info',
            component: InstitutiInfoComponent
      }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutoRoutingModule { }
