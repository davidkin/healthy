import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/food-program',
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
  {
    path: 'group-task',
    loadChildren: () => import('./pages/group-task/group-task.module').then( m => m.GroupTaskPageModule)
  },
  {
    path: 'food-program',
    loadChildren: () => import('./pages/food-program/food-program.module').then( m => m.FoodProgramPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
