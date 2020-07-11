import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerquestionPages } from './perquestion.pages';

const routes: Routes = [
  {
    path: '',
    component: PerquestionPages
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerqustionRoutingModule {}
