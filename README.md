# Aerobase Angular

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/aerobase/aerobase-angular.svg?branch=master)](https://travis-ci.org/aerobase/aerobase-angular)
[![Known Vulnerabilities](https://snyk.io/test/github/aerobase/aerobase-angular/badge.svg)](https://snyk.io/test/github/aerobase/aerobase-angular)
[![npm version](https://badge.fury.io/js/aerobase-angular.svg)](https://badge.fury.io/js/aerobase-angular)
![npm](https://img.shields.io/npm/dm/aerobase-angular.svg)
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)
[![Slack](https://slackin-iijwrzzihr.now.sh/badge.svg)](https://slackin-iijwrzzihr.now.sh)
[![dependencies Status](https://david-dm.org/aerobase/aerobase-angular/status.svg?path=projects/aerobase-angular)](https://david-dm.org/aerobase/aerobase-angular?path=projects/aerobase-angular)
[![DevDependencies](https://david-dm.org/aerobase/aerobase-angular/dev-status.svg)](https://david-dm.org/aerobase/aerobase-angular?type=dev)

> Easy Aerobase setup for Angular applications.

---

- [About](#about)
- [Install](#install)
- [Setup](#setup)
  - [Angular](#angular)
  - [Aerobase](#aerobase)
- [AuthGuard](#authguard)
- [HttpClient Interceptor](#httpclient-interceptor)
- [Contributors](#contributors)
- [License](#license)

---

## About

This library helps you to use [keycloak-js](https://github.com/aerobase/keycloak-js-bower) in Angular > v4.3 applications providing the following features:

- A **Aerobase Service** which wraps the keycloak-js methods to be used in Angular, giving extra
  functionalities to the original functions and adding new methods to make it easier to be consumed by
  Angular applications.
- Generic **AuthGuard implementation**, so you can customize your own AuthGuard logic inheriting the authentication logic and the roles load.
- A **HttpClient interceptor** that adds the authorization header to all HttpClient requests.
  It is also possible to disable this interceptor or exclude routes from having the authorization header.
- This documentation also assists you to configure the aerobase in the Angular applications and with
  the client setup in the admin console of your aerobase installation.

## Install

### Choosing the appropriate version of aerobase-angular

This library depends on angular and aerobase versions so as it might exist breaking changes in some of them there are
different build versions supporting these combinations, so be aware to choose the correct version for your project.

| aerobase-angular | Angular | Aerobase | SSO-RH |
| :--------------: | :-----: | :------: | :----: |
|      1.3.x       | 4 and 5 |    3     |   7    |
|      2.x.x       | 4 and 5 |    4     |   -    |
|      3.x.x       |    6    |    3     |   7    |
|      4.x.x       |    6    |    4     |   -    |
|      5.x.x       |    7    |    3     |   7    |
|      6.x.x       |    7    |    4     |   -    |

**Warning**: This library will work only with versions higher or equal than 4.3.0 of Angular. The reason for this is that aerobase-angular uses the Interceptor from `@angular/common/http` package and this feature was available from this version on.

### Steps to install using NPM or YARN

> Please, again, be aware to choose the correct version, as stated above. Installing this package without a version will make it compatible with the **latest** angular and aerobase versions.

In your angular application directory:

With npm:

```sh
npm install --save aerobase-angular@<choosen-version-from-table-above>
```

With yarn:

```sh
yarn add aerobase-angular@<choosen-version-from-table-above>
```

## Setup

### Angular

The AerobaseService should be initialized during the application loading, using the [APP_INITIALIZER](https://angular.io/api/core/APP_INITIALIZER) token.

#### AppModule

```js
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AerobaseService, AerobaseAngularModule } from 'aerobase-angular';
import { initializer } from './utils/app-init';

@NgModule({
  imports: [AerobaseAngularModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [AerobaseService]
    }
  ]
})
export class AppModule {}
```

- **Notice** that the AerobaseAngularModule was imported by the AppModule. For this reason you don't need to insert the AerobaseService in the AppModule providers array.

#### initializer Function

This function can be named and placed in the way you think is most appropriate. In the
underneath example it was placed in a separate file `app-init.ts` and the function was called
`initializer`.

```js
import { AerobaseService } from 'aerobase-angular';

export function initializer(aerobase: AerobaseService): () => Promise<any> {
  return (): Promise<any> => aerobase.init();
}
```

### Aerobase

Besides configuring the aerobase lib in your application it is also necessary to setup the
access - scope for the **account** client.

In this documentation we assume that you already installed and configured your Aerobase
instance, as well created the client app.

**Hint:** If you need to create an environment for testing purposes, try out the [Aerobase demo](http://www.aerobase.org/downloads.html) or the official [aerobase docker image](https://hub.docker.com/r/jboss/aerobase/).

#### Client configuration

When requesting the method to get the User's Profile, the client app should have the scope and access to the account **view-profile** role. To do it, access **Clients** :arrow_right: **My-app** :arrow_right: **Scope**. Select the **account** app in Client Roles and assign the view-profile role.

![aerobase-account-scope](./docs/images/aerobase-account-scope.png)

## AuthGuard

A generic AuthGuard, `AerobaseAuthGuard`, was created to help you bootstrap your security configuration and avoid duplicate code. This class already checks if the user is logged in and get the list of roles from the authenticated user, provided by the aerobase instance. In your implementation you just need to implement the desired security logic.

Example:

```js
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AerobaseService, AerobaseAuthGuard } from 'aerobase-angular';

@Injectable()
export class AppAuthGuard extends AerobaseAuthGuard {
  constructor(protected router: Router, protected aerobaseAngular: AerobaseService) {
    super(router, aerobaseAngular);
  }

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.authenticated) {
        this.aerobaseAngular.login();
        return;
      }

      const requiredRoles = route.data.roles;
      if (!requiredRoles || requiredRoles.length === 0) {
        return resolve(true);
      } else {
        if (!this.roles || this.roles.length === 0) {
          resolve(false);
        }
        let granted: boolean = false;
        for (const requiredRole of requiredRoles) {
          if (this.roles.indexOf(requiredRole) > -1) {
            granted = true;
            break;
          }
        }
        resolve(granted);
      }
    });
  }
}
```

## HttpClient Interceptor

By default all HttpClient requests will add the Authorization header in the format of: Authorization: Bearer **_TOKEN_**.

There is also the possibility to exclude a list of URLs that should not have the authorization header. The excluded list must be informed in the aerobase initialization. For example:

```js
try {
  await aerobase.init({
    config: {
      url: 'http://localhost:8080/auth',
      realm: 'your-realm',
      clientId: 'client-id'
    },
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe: false
    },
    enableBearerInterceptor: true,
    bearerExcludedUrls: ['/assets', '/clients/public']
  });
  resolve();
} catch (error) {}
```

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/2146903?v=4" width="100px;"/><br /><sub><b>Frederik Prijck</b></sub>](https://github.com/frederikprijck)<br /> | [<img src="https://avatars1.githubusercontent.com/u/980278?v=4" width="100px;"/><br /><sub><b>jmparra</b></sub>](https://github.com/jmparra)<br /> | [<img src="https://avatars2.githubusercontent.com/u/6547340?v=4" width="100px;"/><br /><sub><b>Marcel Német</b></sub>](https://github.com/marcelnem)<br /> | [<img src="https://avatars3.githubusercontent.com/u/676270?v=4" width="100px;"/><br /><sub><b>Mauricio Gemelli Vigolo</b></sub>](https://github.com/aerobase)<br /> | [<img src="https://avatars3.githubusercontent.com/u/14264577?v=4" width="100px;"/><br /><sub><b>Raphael Alex Silva Abreu</b></sub>](https://github.com/aelkz)<br /> |
| :---: | :---: | :---: | :---: | :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

If you want to contribute to the project, please check out the [contributing](docs/CONTRIBUTING.md)
document.

## License

**aerobase-angular** is licensed under the **[MIT](LICENSE)**.

[keycloak-js](https://github.com/aerobase/keycloak-js-bower) is licensed under the **Apache 2.0**.
