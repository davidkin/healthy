import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/prev',
    pathMatch: 'full'
  },
  {
    path: 'preview',
    loadChildren: () => import('./pages/preview/preview.module').then( m => m.PreviewPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./pages/slider/slider.module').then( m => m.SliderPageModule)
  },
  {
    path: 'agree-read-data',
    loadChildren: () => import('./pages/agree-data-read/agree-data-read.module').then( m => m.AgreeReadDataPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'question',
    loadChildren: () => import('./pages/question/question.module').then( m => m.QuestionPageModule)
  },
  {
    path: 'web-rf',
    loadChildren: () => import('./pages/web-rf/web-rf.module').then( m => m.SliderPageModule)
  },
  {
    path: 'program-name',
    loadChildren: () => import('./pages/program-name/program-name.module').then( m => m.ProgramNamePageModule)
  },
  {
    path: 'individual-task',
    loadChildren: () => import('./pages/individual-task/individual-task.module').then( m => m.IndividualTaskPageModule)
  },
  {
    path: 'prev',
    loadChildren: () => import('./pages/prev-page/prev.module').then( m => m.PrevPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
