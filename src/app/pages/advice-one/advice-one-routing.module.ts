import { NgModule } from '@angular/core';
import { AdviceOnePage } from './advice-one.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdviceOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdviceOneRoutingModule {}
