import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
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
}
