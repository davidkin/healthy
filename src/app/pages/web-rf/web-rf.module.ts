import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebRfPage } from './web-rf.page';
import { WebRfPageRoutingModule } from './web-rf-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebRfPageRoutingModule
  ],
  declarations: [
    WebRfPage,
  ]
})
export class SliderPageModule {}
