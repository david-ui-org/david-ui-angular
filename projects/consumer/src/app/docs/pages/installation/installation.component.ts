import { Component } from '@angular/core';

@Component({
  selector: 'doc-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss']
})
export class InstallationComponent {
installCode = `
  npm install david-ui-angular
  // or
  yarn add david-ui-angular
`;
stylesCode = `  <!-- Add this to your styles.scss file -->
  @import "<path-to-node_modules>/david-ui-angular/styles/_styles.scss";
  @import "@angular/cdk/overlay-prebuilt.css";
`;

styleAngularCode = `  // Add this to your angular.json file
  "styles": [
    "src/styles.scss",
    "./node_modules/david-ui-angular/styles/_styles.scss"
  ],
`;

importModuleCode = `  // e.g Button Module, add this to your app.module.ts file
  import { DUIButton } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIButton],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
`;

useHtmlCode = `  <!-- e.g Button Component, add this to your app.component.html file -->
  <dui-button>Click Me</dui-button>
`;

tailwindConfigCode = `  // add below line into the content array of your tailwind.config.js file
  "./node_modules/david-ui-angular/**/*.{html,ts,js,mjs}"
`;
}
