/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/aerobase/aerobase-angular/LICENSE
 */

/**
 * Aerobase onload options: 'login-required' or 'check-sso'
 */
export type AerobaseOnLoad = 'login-required' | 'check-sso';
/**
 * Aerobase response mode options: 'query' or 'fragment'
 */
export type AerobaseResponseMode = 'query' | 'fragment';
/**
 * Aerobase response type options: 'code' or 'id_token token' or 'code id_token token'
 */
export type AerobaseResponseType = 'code' | 'id_token token' | 'code id_token token';
/**
 * Aerobase flow: 'standard' or 'implicit' or 'hybrid'
 */
export type AerobaseFlow = 'standard' | 'implicit' | 'hybrid';

/**
 * Definitions file from AerobaseInitOptions, from keycloak-js library.
 */
export interface AerobaseInitOptions {
  /**
   * Specifies an action to do on load.
   */
  onLoad?: AerobaseOnLoad;
  /**
   * Set an initial value for the token.
   */
  token?: string;
  /**
   * Set an initial value for the refresh token.
   */
  refreshToken?: string;
  /**
   * Set an initial value for the id token (only together with `token` or
   * `refreshToken`).
   */
  idToken?: string;
  /**
   * Set an initial value for skew between local time and Aerobase server in
   * seconds (only together with `token` or `refreshToken`).
   */
  timeSkew?: number;
  /**
   * Set to enable/disable monitoring login state.
   * @default true
   */
  checkLoginIframe?: boolean;
  /**
   * Set the interval to check login state (in seconds).
   * @default 5
   */
  checkLoginIframeInterval?: number | any;
  /**
   * Set the OpenID Connect response mode to send to Aerobase upon login.
   * @default fragment After successful authentication Aerobase will redirect
   *                   to JavaScript application with OpenID Connect parameters
   *                   added in URL fragment. This is generally safer and
   *                   recommended over query.
   */
  responseMode?: AerobaseResponseMode;
  /**
   * Set the OpenID Connect flow.
   * @default standard
   */
  flow?: AerobaseFlow;
}
