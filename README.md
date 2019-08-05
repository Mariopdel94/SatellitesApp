# SatelliteApp

## Welcome!
This is an app to see the satellites to determine and display what satellites are above the horizon at a given longitude and latitude.
You can start by setting up values for latitude and longitude (or you can leave the default values if you wish). Also you can filter down results by selecting a satellite category on the right top corner select.

## Introduction
I used `Angular 6.1` to build this project with the Angular CLI command `ng new satellite-app` afterwards I started creating modules and components for the basic structure, such as the **Wrapper Module** which has the **Wrapper Component** and the **Wrapper Footer Component**. Also here's where the router outlet is, and it loads any given content based on the URL.

After having a single wrapper to use on the entire project I created the **Home Module** along with the **Home Component** which basically contains the entire usable app UI and where the satellites info is loaded.

Finally, I created the **About Module** along with the **About Component**, here's where the all the project info is and how was done.

## Dependencies used
There are a few external dependencies used in this project, here's the list of the ones used. To install any of them use the command: `npm install ( dependency-name )`
* rxjs-compat version: 6.3.3
* @ng-select/ng-select version: 2.12.0
* foundation-sites version: 6.5.2
* moment version: 2.24.0
* @angular/material version: 7.2.2

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
