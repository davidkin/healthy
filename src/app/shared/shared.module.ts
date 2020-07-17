import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ListComponent } from './components/list/list.component';
import { HeaderComponent } from './components/header/header.component';
import { AdviceComponent } from './components/advice/advice.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    ListComponent,
    HeaderComponent,
    AdviceComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,

    ListComponent,
    HeaderComponent,
    AdviceComponent,
    SearchComponent
  ]
})
export class SharedModule {}
