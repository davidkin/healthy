import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AdviceTwoRoutingModule } from './advice-two-routing.module';
import { AdviceTwoPage } from './advice-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdviceTwoRoutingModule
  ],
  declarations: [
    AdviceTwoPage
  ]
})
export class AdviceTwoPageModule {}
