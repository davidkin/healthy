import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'perqustion',
    pathMatch: 'full'
  },
  {
    path: 'perqustion',
    loadChildren: () => import('./perquestion/perquestion.module').then( m => m.PerquestionModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
