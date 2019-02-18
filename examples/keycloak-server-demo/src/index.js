#!/usr/bin/env node

/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/aerobase/aerobase-angular/LICENSE
 */

const express = require('express');
const utils = require('./core/utils');

import { RouterConfig } from './core/config';

// Init App
utils.initDemoApp();

const app = express();

// Init Routers
let routerConfig = new RouterConfig(app);

app.listen(3000, utils.serverInitCallback);
