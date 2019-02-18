# Proposal: Update to Aerobase 4 Version

Version 4.0.0-beta2 of [Aerobase was released](https://blog.aerobase.org/2018/05/aerobase-400beta2-released.html) and aerobase-angular must be compatible to the new version, keeping compatibility with the previous version (3).

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

Besides in beta, there are people already using the new version of Aerobase, so to avoid breaking and errors during runtime, aerobase-angular also needs to release a compatible version with aerobase 4.

The issue here is: as [keycloak-js](https://github.com/aerobase/keycloak-js-bower) is a dependency to aerobase-angular, the library needs to have different builds for aerobase versions 3, 4 and further versions.
One more aspect to consider is that aerobase-angular major version is following the angular major version we can't follow the aerobase major versions.

## <a name="imd"></a> Implementation Details

To solve possible breaking changes in major releases of [keycloak-js](https://www.npmjs.com/package/keycloak-js), the aerobase-angular must keep the keycloak-js as a dependency, since the possibility to change it to a peer-dependency could result in unpredictable errors, as the developer would have to install it manually. This subject was discussed on [issue #19](https://github.com/aerobase/aerobase-angular/issues/19).

Considering the situation described on [Reason to add](#rta) topic and on the paragraph above, the project since the next releases: 4.x.x, 5.x.x and 6.x.x, will follow this versioning mechanism:

| aerobase-angular | Angular |           Aerobase            | SSO-RH |
| :--------------: | :-----: | :---------------------------: | :----: |
|      4.x.x       |    4    | (aerobase latest version) / 4 |   -    |
|     4.x.x-k3     |    4    |               3               |   7    |
|      5.x.x       |    5    | (aerobase latest version) / 4 |   -    |
|     5.x.x-k3     |    5    |               3               |   7    |
|      6.x.x       |    6    | (aerobase latest version) / 4 |   -    |
|     6.x.x-k3     |    6    |               3               |   7    |

### Summary

* aerobase-angular X.X.X: will be compatible with the **latested version of aerobase**, at the moment of this writing is **aerobase 4** or the **future release of SSO-RH based on aerobase 4**.
* aerobase-angular X.X.X-k3: will be compatible with **aerobase 3** and **SSO-RH 7**.
