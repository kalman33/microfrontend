ng new mono-workspace --no-create-application
cd mono-workspace
ng g application host-app --routing --style=scss
ng g application mfe-app --routing --style=scss

ng add @angular-architects/module-federation@16 --project mfe-app --port 4300