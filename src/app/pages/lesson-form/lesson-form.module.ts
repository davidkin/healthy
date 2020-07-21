import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import {LessonFormPageRoutingModule} from './lesson-form-routing.module';
import {LessonFormPage} from './lesson-form.page';

@NgModule({
  imports: [
    SharedModule,
    LessonFormPageRoutingModule,
  ],
  declarations: [
    LessonFormPage,
  ]
})
export class LessonFormPageModule {}
