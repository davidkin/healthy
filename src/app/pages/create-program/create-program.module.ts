import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CreateProgramPage } from './create-program.page';
import { CreateProgramPageRoutingModule } from './create-program-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CreateProgramPageRoutingModule
  ],
  declarations: [
    CreateProgramPage
]
})
export class CreateProgramPageModule {}
