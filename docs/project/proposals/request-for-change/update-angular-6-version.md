# Proposal: Update Angular 6 Version

Since the last release of Angular, [version 6](https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4), the aerobase-angular is not working anymore due the changes in rxjs@6.0.0.

---

## <a name="toc"></a> Table of Contents

* [Proposed By](#prb)
* [History](#his)
* [Reason to add](#rta)
* [Implementation Details](#imd)

---

## <a name="prb"></a> Proposed By

* Name: Mauricio Gemelli Vigolo
* Date: 2018-05-08
* Github user: [aerobase](https://github.com/aerobase)

### <a name="his"></a> History

|    Date    |                        User                         | Details                          |
| :--------: | :-------------------------------------------------: | -------------------------------- |
| 2018-05-08 | [aerobase](https://github.com/aerobase) | Initial version of this document |

## <a name="rta"></a> Reason to add

With the release of Angular 6 the aerobase-angular is not compiling anymore due changes with rxjs@6. Also trying to
update to Angular 5 was [causing compilation errors](<(https://github.com/angular/angular/issues/19607)>) for those using Angular 4, so the dev dependencies of aerobase-angular
were frozen in version 4.4.4.
The problem in 4.4.4 was that dev dependencies were outdated as [david-dm](https://david-dm.org/aerobase/aerobase-angular?type=dev) report which is also not good for the library.

## <a name="imd"></a> Implementation Details

The release 6.0.0 of aerobase-angular will change the versioning mechanism, as described bellow:

* aerobase-angular 6.x.x will be compatible with angular 6
* aerobase-angular 5.x.x will be compatible with angular 5
* aerobase-angular 4.x.x will be compatible with angular 4

This way the library will support the newest angular versions not forgetting legacy applications.
