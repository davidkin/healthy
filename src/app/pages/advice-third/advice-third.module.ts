import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AdviceThirdPage } from './advice-third.page';
import { AdviceThirdRoutingModule } from './advice-third-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdviceThirdRoutingModule
  ],
  declarations: [
    AdviceThirdPage
  ]
})
export class AdviceThirdPageModule {}
