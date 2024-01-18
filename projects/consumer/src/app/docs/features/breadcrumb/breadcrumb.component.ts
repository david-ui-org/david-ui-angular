import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  importCode: string = ` import { DUIBreadCrumb } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIBreadCrumb],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  collapseCode: string = `
  <div class="w-80">
    <dui-breadcrumb>
      <ng-template breadcrumb-Item>
        <a href="#" class="opacity-60"> Docs </a>
      </ng-template>
      <ng-template breadcrumb-Item>
        <a href="#" class="opacity-60"> Components </a>
      </ng-template>
      <ng-template breadcrumb-Item>
        <a href="#">Breadcrumbs</a>
      </ng-template>
    </dui-breadcrumb>
  </div>
  `;

}
