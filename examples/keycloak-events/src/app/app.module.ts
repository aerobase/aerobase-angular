import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';

import { AerobaseAngularModule, AerobaseService } from 'aerobase-angular';

import { AppComponent } from './app.component';
import { initializer } from './app-initilizer';
import { CoreModule } from './core/core.module';
import { EventStackService } from './core/services/event-stack.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    AerobaseAngularModule,
    CoreModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [AerobaseService, EventStackService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
