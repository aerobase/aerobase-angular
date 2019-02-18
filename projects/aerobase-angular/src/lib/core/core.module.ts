/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/aerobase/aerobase-angular/LICENSE
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AerobaseService } from './services/aerobase.service';
import { AerobaseBearerInterceptor } from './interceptors/aerobase-bearer.interceptor';

@NgModule({
  imports: [CommonModule],
  providers: [
    AerobaseService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AerobaseBearerInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
