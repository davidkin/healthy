import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/slider',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/preview/preview.module').then( m => m.PreviewPageModule)
  },
  {
    path: 'advice-one',
    loadChildren: () => import('./pages/advice-one/advice-one.module').then( m => m.AdviceOnePageModule)
  },
  {
    path: 'advice-two',
    loadChildren: () => import('./pages/advice-two/advice-two.module').then( m => m.AdviceTwoPageModule)
  },
  {
    path: 'advice-three',
    loadChildren: () => import('./pages/advice-three/advice-three.module').then( m => m.AdviceThreePageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./pages/slider/slider.module').then( m => m.SliderPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
