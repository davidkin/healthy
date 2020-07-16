import { PreviewPage } from './preview.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PreviewPageRoutingModule } from './preview-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewPageRoutingModule
  ],
  declarations: [
    PreviewPage,
  ]
})
export class PreviewPageModule {}
