import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { FoodProgramPageRoutingModule } from './food-program-routing.module';
import { FoodProgramPage } from './food-program.page';

@NgModule({
  imports: [
    SharedModule,
    FoodProgramPageRoutingModule
  ],
  declarations: [
    FoodProgramPage
  ]
})
export class FoodProgramPageModule {}
