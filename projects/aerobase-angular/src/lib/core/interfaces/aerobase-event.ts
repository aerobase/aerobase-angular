/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/aerobase/aerobase-angular/LICENSE
 */

/**
 * Aerobase event types, as described at the keycloak-js documentation:
 * https://www.aerobase.org/docs/latest/securing_apps/index.html#callback-events
 */
export enum AerobaseEventType {
  /**
   * Called if there was an error during authentication.
   */
  OnAuthError,
  /**
   * Called if the user is logged out
   * (will only be called if the session status iframe is enabled, or in Cordova mode).
   */
  OnAuthLogout,
  /**
   * Called if there was an error while trying to refresh the token.
   */
  OnAuthRefreshError,
  /**
   * Called when the token is refreshed.
   */
  OnAuthRefreshSuccess,
  /**
   * Called when a user is successfully authenticated.
   */
  OnAuthSuccess,
  /**
   * Called when the adapter is initialized.
   */
  OnReady,
  /**
   * Called when the access token is expired. If a refresh token is available the token
   * can be refreshed with updateToken, or in cases where it is not (that is, with implicit flow)
   * you can redirect to login screen to obtain a new access token.
   */
  OnTokenExpired
}

/**
 * Structure of an event triggered by Aerobase, contains it's type
 * and arguments (if any).
 */
export interface AerobaseEvent {
  /**
   * Event type as described at {@link AerobaseEventType}.
   */
  type: AerobaseEventType;
  /**
   * Arguments from the keycloak-js event function.
   */
  args?: any;
}
