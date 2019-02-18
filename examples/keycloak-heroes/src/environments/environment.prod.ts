import { AerobaseConfig } from 'aerobase-angular';

// Add here your aerobase setup infos
let aerobaseConfig: AerobaseConfig = {
  url: 'https://example.aerobase.io/auth/',
  realm: 'example',
  clientId: 'example-client'
};

export const environment = {
  production: true,
  assets: {
    dotaImages:
      'https://cdn-aerobase-angular.herokuapp.com/assets/images/dota-heroes/'
  },
  apis: { dota: 'http://localhost:3000' },
  aerobase: aerobaseConfig
};
