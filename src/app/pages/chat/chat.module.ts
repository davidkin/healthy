import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import {ChatPageRoutingModule} from './chat-routing.module';
import {ChatPage} from './chat.page';

@NgModule({
  imports: [
    SharedModule,
    ChatPageRoutingModule,
  ],
  declarations: [
    ChatPage,
  ]
})
export class ChatPageModule {}
