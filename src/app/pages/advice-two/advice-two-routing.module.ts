import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdviceTwoPage } from './advice-two.page';

const routes: Routes = [
  {
    path: '',
    component: AdviceTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdviceTwoRoutingModule {}
