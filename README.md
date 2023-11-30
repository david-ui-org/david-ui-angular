# David UI Angular - Beta Version

### _The right choice for fast and easy UI development using tailwind css_

David UI Angular is a comprehensive Angular framework that leverages the power of Tailwind CSS to provide a rich set of UI components, making it easy to build stylish web applications.

<img width="1621" alt="david-ui-angular-thumb" src="https://github.com/david-ui-org/david-ui-angular/assets/146350044/6a06dd12-0e4d-41fd-805a-459cc6459867">

<details>
  <summary>Table of Contents</summary>
  
- [David UI Angular](#david-ui-angular)
    - [_The right choice for fast and easy UI development using tailwind css_](#the-right-choice-for-fast-and-easy-ui-development-using-tailwind-css)
  - [Installation](#installation)
  - [Getting Started](#getting-started)
  - [Techs](#techs)
  - [Contribution](#contribution)
  - [Build Library](#build-library)
  - [Steps to deploy the documentation](#steps-to-deploy-the-documentation)
  - [License](#license)
  - [Contact](#contact)
  - [Code scaffolding](#code-scaffolding)
  - [Build](#build)
  - [Publishing](#publishing)
  - [Running unit tests](#running-unit-tests)
  - [Further help](#further-help)
</details>




## Installation

To get started with David UI Angular, simply install it via npm or yarn.

```bash
  npm install david-ui-angular
```

## Getting Started

Follow these steps to integrate David UI Angular into your Angular project:

1. Import the styles: In your project's styles.css or styles.scss, import David UI Angular's styles along with Tailwind CSS and you also need to import the **@angular/cdk** styles:


```css
@import "<path-to-node_modules>/david-ui-angular/styles/_styles.scss";
@import "@angular/cdk/overlay-prebuilt.css";
```

OR
You can add the link of style sheet in your angular.json style's list
```angular.json
"styles": [
              "src/styles.scss",
              "./node_modules/david-ui-angular/styles/_styles.scss"
            ],
```

2. Import the david-ui-angular modules into your app.module.ts file
```javascript
import { DUIButton } from "david-ui-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DUIButton],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

then you can import and use the component in your html file like shown below.

```html
<dui-button>Click Me</dui-button>
```
3. After this you need to add below line into the content array of you tailwind.config.js file

```tailwing.config
"./node_modules/david-ui-angular/**/*.{html,ts,js,mjs}"
```
For detailed usage and documentation, please visit our [official documentation](https://david-ui-angular.com/docs).

## Techs

DUI-Angular uses a number of open source libraries to work properly:

- [Angular 16] - Angular Framework verion ^16.2.0!
- [Tailwind Css] - Uses Tailwind Css v ^3.3.3 for styling UI.
- [Bundle-Scss] - For bundling scss files


And of course [david-ui-angular](https://www.npmjs.com/package/david-ui-angular?activeTab=readme) itself is open source library.


## Contribution

You can contribute to the package by following the steps below:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request
6. Wait for the pull request to be reviewed
7. Get your pull request merged
8. Celebrate 🎉
9. Repeat

DUI-Angular requires [Node.js](https://nodejs.org/) v18+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
ng serve
```
## Build Library
```sh
npm run build-library
```

> There are two applications inside project folder
> consumer and david-ui-angular
> as name indicate one is the consumer 
> of the library to test the library and also
> contains the documentation, while the other 
> is the library itself which has components and all.

## Steps to deploy the documentation

Run this command in the root folder

```sh
ng build consumer
```

The output directory for the documentation will be **'dist/consumer'**

## License

This project is licensed under the MIT License. For more details, please see the [LICENSE](https://www.david-ui-angular.com/docs/license) file.

## Contact

If you have any questions about this project, please feel free to reach out to us at daviduiorg@gmail.com

## Code scaffolding

Run `ng generate component component-name --project david-ui-angular` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project david-ui-angular`.

> Note: Don't forget to add `--project david-ui-angular` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build david-ui-angular` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build david-ui-angular`, go to the dist folder `cd dist/david-ui-angular` and run `npm publish`.

## Running unit tests

Run `ng test david-ui-angular` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
