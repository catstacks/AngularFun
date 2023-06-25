import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  ChatClientService,
  ChannelService,
  StreamI18nService,
  MessageContext,
  CustomTemplatesService,
  ChannelPreviewContext,
} from 'stream-chat-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('customMessageTemplate') messageTemplate!: TemplateRef<MessageContext>;
  @ViewChild('customChannelPreviewTemplate') channelPreviewTemplate!: TemplateRef<ChannelPreviewContext>;

  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService,
    private customTemplatesService: CustomTemplatesService,
  ) {
    const apiKey = 'dz5f4d5kzrue';
    const userId = 'wandering-heart-0';
    const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoid2FuZGVyaW5nLWhlYXJ0LTAiLCJleHAiOjE2ODc3MjQwMzF9.hp-NozJwsJAtyBj8l2OinNwDaLG2J2SaFxIkiMoZa5U';
    this.chatService.init(apiKey, userId, userToken);
    this.streamI18nService.setTranslation();
  }

  async ngOnInit() {
    const channel = this.chatService.chatClient.channel('messaging', 'talking-about-angular', {
      // add as many custom fields as you'd like
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      name: 'Talking about Angular',
    });
    await channel.create();
    await this.channelService.init({
      type: 'messaging',
      id: {$eq: 'talking-about-angular'},
    });
  }

  ngAfterViewInit(): void {
    // this.customTemplatesService.messageTemplate$.next(this.messageTemplate);
    // this.customTemplatesService.channelPreviewTemplate$.next(this.channelPreviewTemplate);
  }
}
