#!/bin/bash

#git mv packages/core/src/config/AeroGearConfiguration.ts packages/core/src/config/AeroBaseConfiguration.ts

find . -type f ! -wholename "*aerobase-lable.sh" ! -wholename "*/\.git/*" ! -wholename "*/node_modules/*" -print0 | xargs -0 sed -i 's/keycloak/aerobase/g'
find . -type f ! -wholename "*aerobase-lable.sh" ! -wholename "*/\.git/*" ! -wholename "*/node_modules/*" -print0 | xargs -0 sed -i 's/Keycloak/Aerobase/g'
find . -type f ! -wholename "*aerobase-lable.sh" ! -wholename "*/\.git/*" ! -wholename "*/node_modules/*" -print0 | xargs -0 sed -i 's/mauriciovigolo/aerobase/g'
find . -type f ! -wholename "*aerobase-lable.sh" ! -wholename "*/\.git/*" ! -wholename "*/node_modules/*" -print0 | xargs -0 sed -i 's/aerobase-js/keycloak-js/g'
find . -type f ! -wholename "*aerobase-lable.sh" ! -wholename "*/\.git/*" ! -wholename "*/node_modules/*" -print0 | xargs -0 sed -i 's/Aerobase-js/Keycloak-js/g'
find . -type f ! -wholename "*aerobase-lable.sh" ! -wholename "*/\.git/*" ! -wholename "*/node_modules/*" -print0 | xargs -0 sed -i 's/Aerobase\.Aerobase/Keycloak\.Keycloak/g'
find . -type f ! -wholename "*aerobase-lable.sh" ! -wholename "*/\.git/*" ! -wholename "*/node_modules/*" -print0 | xargs -0 sed -i 's|KEYCLOAK-INSTANCE-URL|https://example.aerobase.io/auth/|g'
find . -type f ! -wholename "*aerobase-lable.sh" ! -wholename "*/\.git/*" ! -wholename "*/node_modules/*" -print0 | xargs -0 sed -i 's|REALM-NAME|example|g'
find . -type f ! -wholename "*aerobase-lable.sh" ! -wholename "*/\.git/*" ! -wholename "*/node_modules/*" -print0 | xargs -0 sed -i 's|CLIENT-ID-NAME|example-client|g'

mv projects/keycloak-angular projects/aerobase-angular

mv projects/aerobase-angular/src/lib/core/interfaces/keycloak-config.ts projects/aerobase-angular/src/lib/core/interfaces/aerobase-config.ts
mv projects/aerobase-angular/src/lib/core/interfaces/keycloak-event.ts projects/aerobase-angular/src/lib/core/interfaces/aerobase-event.ts
mv projects/aerobase-angular/src/lib/core/interfaces/keycloak-init-options.ts projects/aerobase-angular/src/lib/core/interfaces/aerobase-init-options.ts
mv projects/aerobase-angular/src/lib/core/interfaces/keycloak-options.ts projects/aerobase-angular/src/lib/core/interfaces/aerobase-options.ts

mv projects/aerobase-angular/src/lib/keycloak-angular.module.ts projects/aerobase-angular/src/lib/aerobase-angular.module.ts

mv projects/aerobase-angular/src/lib/core/services/keycloak-auth-guard.ts projects/aerobase-angular/src/lib/core/services/aerobase-auth-guard.ts
mv projects/aerobase-angular/src/lib/core/services/keycloak.service.spec.ts projects/aerobase-angular/src/lib/core/services/aerobase.service.spec.ts
mv projects/aerobase-angular/src/lib/core/services/keycloak.service.ts projects/aerobase-angular/src/lib/core/services/aerobase.service.ts

mv projects/aerobase-angular/src/lib/core/interceptors/keycloak-bearer.interceptor.spec.ts projects/aerobase-angular/src/lib/core/interceptors/aerobase-bearer.interceptor.spec.ts
mv projects/aerobase-angular/src/lib/core/interceptors/keycloak-bearer.interceptor.ts projects/aerobase-angular/src/lib/core/interceptors/aerobase-bearer.interceptor.ts

echo "successfully relabel to aerobase"
