<p align="center">
  <img src="./docs/images/angular.png" alt="angular-logo" width="180px" height="180px"/>
  <br>
  <i>A modular and domain-driven structure for Angular projects</i>
  <br>
  <br>
  <a href="https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt" target="_blank"><img src="https://badgen.net/badge/license/MIT/blue" alt="license" /></a>
  <a href="https://www.github.com/angular/angular" target="_blank"><img src="https://img.shields.io/badge/angular-love-blue?logo=angular&angular=love" alt="angular-love" /></a>
  <a href="https://stackblitz.com/github/NachoDPP/Angular-Project-Structure">
    <img src="https://badgen.net/badge/icon/Open in Stackblitz/blue?icon=visualstudio&label" alt="Open in Stackblitz" />
  </a>
  <br>
  <br>
</p>

# Angular Project Structure

This repository proposes a directory structure for any Angular application with a domain and modularity approach. This structure arises from the need to separate the domain/feature layer from the Angular infrastructure concepts.

## About

The main idea behind this structure is to create an application context bundle that groups all the domain/feature modules of the app, including a shared module inside the app directory, leaving the rest of the infrastructure modules and files outside this scope.

This directory structure corrects the ng creation of all files within the app directory. The default ng structure forces all code to exist as a subdirectory to the app without giving a clear space for files that are not bound to the application domain or infrastructure related, such as config and core modules, application bootstrap factories, testing section, and so on.

## Tree Sections

These are the sections that this repository proposes to add to the default structure of an Angular application. Click on the sections below for more information.

- **Sections**

  - [App Directory](./docs/app-directory.md)
  - [Shared Directory](./docs/shared-directory.md)
  - [Assets Directory](./docs/assets-directory.md)
  - [Config Directory](./docs/config-directory.md)
  - [Core Directory](./docs/core-directory.md)
  - [Styles Directory](./docs/styles-directory.md)
  - [Test Directory](./docs/test-directory.md)

- **Extras**

  - [Path Alias](./docs/path-alias.md)

## Tree Structure

```bash
src
┣ app
|  ┣ landing
|  |  ┣ pages
|  |  |  ┗ landing-page
|  |  |     ┗ landing-page.component|.html|.scss|.ts
|  |  ┣ landing-routing.module.ts
|  |  ┗ landing.module.ts
|  ┣ shared
|  |  ┗ shared.module.ts
|  ┣ app-routing.module.ts
|  ┗ app.module.ts
|
┣ assets
|  ┗ favicons
|      ┗ favicon.ico
|
┣ config
|  ┣ enums
|  |  ┗ environment.enum.ts
|  ┣ environments
|  |  ┣ environment.devt.ts
|  |  ┗ environment.ts
|  ┣ interfaces
|  |  ┣ config.interface.ts
|  |  ┗ environment.interfaces.ts
|  ┣ services
|  |  ┗ config.service.ts
|  ┣ config.module.ts
|  ┣ envconfig.devt.json
|  ┗ envconfig.prod.json
|
┣ core
|  ┣ guards
|  |  ┗ singleton.guard.ts
|  ┣ layout
|  |  ┗ toolbar
|  |     ┗ toolbar.component|.html|.scss|.ts
|  ┣ pages
|  |  ┗ page-not-found
|  |     ┗ page-not-found.component|.html|.scss|.ts
|  ┗ core.module.ts
|
┣ styles
|  ┗ styles.scss
|
┣ index.html
┣ main-routing.module.ts
┣ main.component.html
┣ main.component.ts
┣ main.module.ts
┗ main.ts
```

```bash
.
┣ src
|   ...
┣ test
|   ┣ app
|   |  ┣ landing
|   |  |  ┣ pages
|   |  |  |  ┗ landing-page.component.spec.ts
|   |  |  ┣ landing-routing.module.spec.ts
|   |  |  ┗ landing.module.spec.ts
|   |  ┣ shared
|   |  |  ┗ shared.module.spec.ts
|   |  ┣ app-routing.module.spec.ts
|   |  ┗ app.module.spec.ts
|   ┣ config
|   |  ┗ config.service.spec.ts
|   ┣ core
|   |  ┣ guards
|   |  |  ┗ singleton.guard.spec.ts
|   |  ┣ layout
|   |  |  ┗ toolbar.component.spec.ts
|   |  ┣ pages
|   |  |  ┗ page-not-found.component.spec.ts
|   |  ┗ singleton.guard.spec.ts
|   ┣ main-routing.module.spec.ts
|   ┣ main.component.spec.ts
|   ┗ main.module.spec.ts
```

## Tree Structure in a New Angular Application

These instructions describe how to add this structure to a new Angular application that has been created using the Angular CLI. Remember to replace the value of **"project-name"** in the commands with the desired one.

#### 1 - Create a new workspace and an initial application

```bash
# Prerequisites: Install [Angular CLI] and [Node.js] which includes [Node Package Manager][npm]
$ ng new project-name
$ cd project-name && ng generate environments && cd .. 
$ git clone https://github.com/NachoDPP/Angular-Project-Structure.git 
$ rm -rf project-name/src 
$ mv Angular-Project-Structure/src project-name/src 
$ mv Angular-Project-Structure/test project-name/test 
$ rm -rf Angular-Project-Structure
```

#### 2 - Typescript configurations, path aliases and angular.json

```bash
# Typescript Configurations and Path Aliases
$ json --version || npm install -g json
$ cd project-name
$ sed -i '1d' tsconfig.json && sed -i '1d' tsconfig.spec.json
```

##### 2.1 - tsconfig.json

```bash
# tsconfig.json
$ json -f tsconfig.json -I -c "this.compilerOptions.paths = {}"
$ json -f tsconfig.json -I \
    -e "this.compilerOptions.paths['@config/*'] = ['src/config/*']" \
    -e "this.compilerOptions.paths['@core/*'] = ['src/core/*']" \
    -e "this.compilerOptions.paths['@app/*'] = ['src/app/*']" \
    -e "this.compilerOptions.paths['@assets/*'] = ['src/assets/*']"
```

##### 2.2 - tsconfig.spec.json

```bash
# tsconfig.spec.json
$ json -f tsconfig.spec.json -I \
    -e "this.include[0] = 'test/**/*.spec.ts'" \
    -e "this.include[1] = 'test/**/*.d.ts'" 
```

##### 2.3 - angular.json

```bash
# angular.json
$ json -f angular.json -I \
    -e "this.projects['project-name'].architect.build.options.assets = ['src/assets', 'src/config/envconfig.devt.json', 'src/config/envconfig.prod.json']" \
    -e "this.projects['project-name'].architect.build.options.styles = ['src/styles/styles.scss']" \
    -e "this.projects['project-name'].architect.build.configurations.development.fileReplacements[0].replace = 'src/config/environments/environment.ts'" \
    -e "this.projects['project-name'].architect.build.configurations.development.fileReplacements[0].with = 'src/config/environments/environment.devt.ts'" \
    -e "this.projects['project-name'].architect.test.options.assets = ['src/assets', 'src/config/envconfig.devt.json', 'src/config/envconfig.prod.json']" \
    -e "this.projects['project-name'].architect.test.options.styles = ['src/styles/styles.scss']" \
    -e "this.projects['project-name'].architect.test.options.include = ['../test/**/**.spec.ts', '../test/**/**.d.ts']"
```

#### 3 - Post configuration

```bash
# Retrieving the commented line from the tsconfig.json and tsconfig.spec.json files
$ sed -i '1s/^/\/* To learn more about this file see: https:\/\/angular.io\/config\/tsconfig. *\/\n/' tsconfig.json 
$ sed -i '1s/^/\/* To learn more about this file see: https:\/\/angular.io\/config\/tsconfig. *\/\n/' tsconfig.spec.json
$ npm uninstall -g json # Uninstalling the npm json cli package
```
## Running the App

```bash
# Prerequisites: Install [Node.js] which includes [Node Package Manager][npm]
$ npm install
```

```bash
# Development
$ ng serve
```

```bash
# Production Mode
$ ng build
```

```bash
# Unit Tests
$ ng test
```

## License

Copyright (c) Manuel Da Pena. [@NachoDPP](https://github.com/NachoDPP "@NachoDPP")

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Considerations

Please keep in mind that this concept is in its early stages of execution and design; any suggestions or comments are welcome. Feel free to design your own structure if this one is not suitable.
