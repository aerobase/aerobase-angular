/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/aerobase/aerobase-angular/LICENSE
 */

import { TestBed, inject } from '@angular/core/testing';

import { AerobaseService } from './aerobase.service';

describe('AerobaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AerobaseService]
    });
  });

  it(
    'should be created',
    inject([AerobaseService], (service: AerobaseService) => {
      expect(service).toBeTruthy();
    })
  );
});
