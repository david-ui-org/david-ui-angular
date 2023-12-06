import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  public importCode = ` import { DUIPaginator } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIPaginator],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  paginationCode = `
  <dui-paginator [length]="50"></dui-paginator>

  `;

  paginationStandardCode = `
  <dui-paginator variant="Standard" [length]="50"></dui-paginator>

  `;

  paginationCircularCode = `
  <dui-paginator variant="Circular" [length]="50"></dui-paginator>

  `;

  paginationOptionCode = `
  <div class="flex flex-col w-95">
    <dui-paginator variant="Standard" [showFirstLastOption]="false" [length]="50"></dui-paginator>
    <dui-paginator [showFirstLastOption]="false" [length]="50"></dui-paginator>
  </div>
  `;
}
