import { AerobaseService, AerobaseEvent } from 'aerobase-angular';

import { environment } from '../environments/environment';
import { EventStackService } from './core/services/event-stack.service';

export function initializer(
  aerobase: AerobaseService,
  eventStackService: EventStackService
): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        aerobase.aerobaseEvents$.subscribe(event => {
          eventStackService.triggerEvent(event);
        });
        await aerobase.init({
          config: environment.aerobase
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
