import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ListComponent } from './components/list/list.component';
import { HeaderComponent } from './components/header/header.component';
import { AdviceComponent } from './components/advice/advice.component';

@NgModule({
  declarations: [
    ListComponent,
    HeaderComponent,
    AdviceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,

    ListComponent,
    HeaderComponent,
    AdviceComponent
  ]
})
export class SharedModule {}
