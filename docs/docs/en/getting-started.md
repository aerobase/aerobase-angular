# Getting started

## Topics

- [](#)

## Instalation

### Choosing the appropriate version of aerobase-angular

This library depends on angular and aerobase versions so as it might exist breaking changes in some of them there are different build versions supporting these combinations, so be aware to choose the correct version for your project.

| aerobase-angular | Angular | Aerobase | SSO-RH |
| :--------------: | :-----: | :------: | :----: |
|      1.3.x       | 4 and 5 |    3     |   7    |
|      2.x.x       | 4 and 5 |    4     |   -    |
|      3.x.x       |    6    |    3     |   7    |
|      4.x.x       |    6    |    4     |   -    |
|      5.x.x       |    7    |    3     |   7    |
|      6.x.x       |    7    |    4     |   -    |

> ⚠️ Note: This library will work only with versions higher or equal than 4.3.0 of Angular. The reason for this is that aerobase-angular uses the Interceptor from `@angular/common/http` package and this feature was available from this version on.

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

> **Why initializing the AerobaseService during the app startup?** Depending on your authentication flow the first thing you may want is to redirect the flow to the login page. Besides that AerobaseService offers methods to obtain the user profile, roles and authentication events, so it can be a dependency in others services.

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

> ℹ️ - The AerobaseAngularModule was imported by the AppModule. For this reason you don't need to insert the AerobaseService in the AppModule providers array.

#### initializer Function

This function can be named and placed in the way you think is most appropriate. In the underneath example it was placed in a separate file `app-init.ts` and the function was called `initializer`.

```js
import { AerobaseService } from 'aerobase-angular';

export function initializer(aerobase: AerobaseService): () => Promise<any> {
  return (): Promise<any> => aerobase.init();
}
```

> ⚠️ -
