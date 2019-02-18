// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { AerobaseConfig } from 'aerobase-angular';

// Add here your aerobase setup infos
let aerobaseConfig: AerobaseConfig = {
  url: 'https://example.aerobase.io/auth/',
  realm: 'example',
  clientId: 'example-client'
};

export const environment = {
  production: false,
  assets: {
    dotaImages:
      'https://cdn-aerobase-angular.herokuapp.com/assets/images/dota-heroes/'
  },
  apis: { dota: 'http://localhost:3000' },
  aerobase: aerobaseConfig
};
