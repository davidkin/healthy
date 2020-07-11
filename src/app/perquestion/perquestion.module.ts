import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PerqustionRoutingModule } from './perquestion-routing.module';
import { PerquestionPages } from './perquestion.pages';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerqustionRoutingModule
  ],
  declarations: [
    PerquestionPages
  ],
})
export class PerquestionModule { }
