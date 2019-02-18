import { Component, OnInit } from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';
import { AerobaseService, AerobaseEventType } from 'aerobase-angular';

import { EventStackService } from './core/services/event-stack.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [EventStackService]
})
export class AppComponent implements OnInit {
  private readonly _usualEventMessage: string = 'Waiting for events from keycloak-js';

  aerobaseEvent: string;
  eventStatus: string;
  eventImg: SafeStyle;

  constructor(
    private _aerobaseService: AerobaseService,
    private _eventStackService: EventStackService
  ) {}

  private changeMarioReaction(eventHappened: boolean = false): SafeStyle {
    let marioReaction: SafeStyle = 'url(assets/mario.gif)';
    if (eventHappened) {
      marioReaction = 'url(assets/mario-event.gif)';
    }
    return marioReaction;
  }

  private notifyEvent(event: string, msg: string, level: 'info' | 'warn' | 'error') {
    this.aerobaseEvent = event;
    this.eventImg = this.changeMarioReaction(true);

    setTimeout(() => {
      this.eventImg = this.changeMarioReaction(false);
    }, 5000);
  }

  private aerobaseEventTriggered({ _id, event }): void {
    switch (event.type) {
      case AerobaseEventType.OnAuthError:
        this.notifyEvent('Auth Error', 'Msg', 'error');
        break;
      case AerobaseEventType.OnAuthLogout:
        this.notifyEvent('Auth Logout', 'Msg', 'warn');
        break;
      case AerobaseEventType.OnAuthRefreshError:
        this.notifyEvent('Auth Refresh Error', 'Msg', 'error');
        break;
      case AerobaseEventType.OnAuthRefreshSuccess:
        this.notifyEvent('Auth Refresh Success', 'Msg', 'info');
        break;
      case AerobaseEventType.OnAuthSuccess:
        this.notifyEvent('Auth Success', 'Msg', 'info');
        break;
      case AerobaseEventType.OnReady:
        this.notifyEvent('On Ready', 'Msg', 'info');
        break;
      case AerobaseEventType.OnTokenExpired:
        this.notifyEvent('Token Expired', 'Msg', 'warn');
        break;
      default:
        break;
    }

    this._eventStackService.purgeEventItem(_id);
  }

  ngOnInit(): void {
    this.eventStatus = this._usualEventMessage;
    this.eventImg = this.changeMarioReaction();

    this._eventStackService.eventTriggered$.subscribe(eventStack => {
      eventStack.forEach(eventItem => this.aerobaseEventTriggered(eventItem));
    });

    this._eventStackService.eventStack.forEach(eventItem => this.aerobaseEventTriggered(eventItem));
  }

  onLogin(): void {
    this._aerobaseService.login();
  }
}
