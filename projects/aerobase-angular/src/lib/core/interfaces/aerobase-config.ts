/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/aerobase/aerobase-angular/LICENSE
 */

/**
 * Credentials type. Should be used when The Access Type is configured as Confidential, as
 * mentioned in the aerobase's documentation:
 * http://www.aerobase.org/docs/latest/securing_apps/index.html#_configuring_a_client_for_use_with_client_registration_cli
 */
export type Credentials = {
  /**
   * Secret or Signed JWT. Please, caution where you store this sensitive information!
   */
  secret: string;
};

/**
 * This is the interface containing the attributes for the aerobase configuration in case
 * you don't specify a aerobase.json file in your project.
 */
export interface AerobaseConfig {
  /**
   * Aerobase server url, for example: http://localhost:8080/auth
   */
  url: string;
  /**
   * Realm name, ie.: myrealm
   */
  realm: string;
  /**
   * Client ID, ie.: myapp
   */
  clientId: string;
  /**
   * The credentials object contains the secret property that should be used depending on
   * which flow and access type was chosen.
   */
  credentials?: Credentials;
}
