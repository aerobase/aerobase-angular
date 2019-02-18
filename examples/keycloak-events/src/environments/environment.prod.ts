import { AerobaseConfig } from 'aerobase-angular';

// Add here your aerobase setup infos
let aerobaseConfig: AerobaseConfig = {
  url: 'https://example.aerobase.io/auth/',
  realm: 'example',
  clientId: 'example-client'
};

export const environment = {
  production: true,
  apis: { countries: 'https://restcountries.eu/rest/v2/' },
  aerobase: aerobaseConfig
};
