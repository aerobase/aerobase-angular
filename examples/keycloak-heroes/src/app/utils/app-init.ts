import { AerobaseService } from 'aerobase-angular';

import { environment } from '../../environments/environment';

export function initializer(aerobase: AerobaseService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await aerobase.init({
          config: environment.aerobase,
          initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false
          },
          bearerExcludedUrls: []
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
