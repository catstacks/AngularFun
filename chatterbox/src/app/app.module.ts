import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { StreamChatModule, StreamAutocompleteTextareaModule } from 'stream-chat-angular';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [AppComponent, MessageComponent],
  imports: [BrowserModule, TranslateModule.forRoot(), StreamAutocompleteTextareaModule, StreamChatModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

