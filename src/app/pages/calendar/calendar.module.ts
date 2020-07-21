import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarPage } from './calendar.page';
import { CalendarPageRoutingModule } from './calendar-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CalendarPageRoutingModule
  ],
  declarations: [
    CalendarPage
]
})
export class CalendarPageModule {}
