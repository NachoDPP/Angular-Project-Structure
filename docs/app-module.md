# App Directory

## Description

The app directory contains a collection of domain/feature modules that are self-contained. This allows Angular to load only the module needed to display the request, saving bandwidth and speeding up the entire application. To accomplish this, each module must have its own routing, which is defined as a loadChildren route resource in the AppRoutingModule.

```bash
.
┣ app # All domain/feature modules should be added here.
   ┣ shared
      ┗ shared.module.ts
   ┣ app-routing.module.ts
   ┗ app.module.ts
```