import { NgModule } from '@angular/core';
import { AdviceThirdPage } from './advice-third.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdviceThirdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdviceThirdRoutingModule {}
