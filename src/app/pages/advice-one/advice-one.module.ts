import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AdviceOneRoutingModule } from './advice-one-routing.module';
import { AdviceOnePage } from './advice-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdviceOneRoutingModule
  ],
  declarations: [
    AdviceOnePage
  ]
})
export class AdviceOnePageModule {}
