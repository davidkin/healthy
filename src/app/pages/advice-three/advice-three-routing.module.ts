import { NgModule } from '@angular/core';
import { AdviceThreePage } from './advice-three.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdviceThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdviceThreeRoutingModule {}
