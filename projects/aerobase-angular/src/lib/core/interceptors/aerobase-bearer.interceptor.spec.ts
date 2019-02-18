/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/aerobase/aerobase-angular/LICENSE
 */

import { TestBed, inject } from '@angular/core/testing';

import { AerobaseBearerInterceptor } from './aerobase-bearer.interceptor';
import { AerobaseService } from '../services/aerobase.service';

describe('AerobaseBearerInterceptor', () => {
  let aerobaseServiceSpy: jasmine.SpyObj<AerobaseService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AerobaseBearerInterceptor,
        {
          provide: AerobaseService,
          useValue: aerobaseServiceSpy
        }
      ]
    });
  });

  it('Should be created', inject(
    [AerobaseBearerInterceptor],
    (service: AerobaseBearerInterceptor) => {
      expect(service).toBeTruthy();
    }
  ));
});
