import { AerobaseConfig } from 'aerobase-angular';

// Add here your aerobase setup infos
let aerobaseConfig: AerobaseConfig = {
  url: 'https://example.aerobase.io/auth/',
  realm: 'example',
  clientId: 'example-client'
};

export const environment = {
  production: true,
  assets: { dotaImages: 'https://api.opendota.com/apps/dota2/images' },
  apis: { dota: 'https://api.opendota.com/api' },
  aerobase: aerobaseConfig
};
