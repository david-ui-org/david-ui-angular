import { Component } from '@angular/core';
import { Property } from '../../../shared/model/property.model';

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
  <div class="flex flex-col w-95 items-center gap-2">
    <dui-paginator variant="Standard" [showFirstLastOption]="false" [length]="50"></dui-paginator>
    <dui-paginator [showFirstLastOption]="false" [length]="50"></dui-paginator>
  </div>
  `;

  paginationTypeVariant: string = ` 
  type variant = 'Simple' | 'Standard' | 'Circular' | 'Grouped';`;

  paginationTypeColor: string = 
  ` type colors =
  | "blue-gray"
  | "gray"
  | "brown"
  | "deep-orange"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "light-green"
  | "green"
  | "teal"
  | "cyan"
  | "light-blue"
  | "blue"
  | "indigo"
  | "deep-purple"
  | "purple"
  | "pink"
  | "red";`;


  paginationProperties: Property[] = [
    {attribute : "variant",type:"Variant",description : "change pagination variant",default : "Simple"},
    {attribute : "color",type:"Color",description : "change pagination color",default : "gray"},
    {attribute : "className",type:"string",description : "Add custom className for pagination",default : "''"},
    {attribute : "page",type:"boolean",description : "Current page ",default : "md"},
    {attribute : "pageSize",type:"number",description : "Shown length of data on single page pagination",default : "false"},
    {attribute : "previousButtonLabel",type:"string",description : "Label for previous page button  pagination",default : "previous"},
    {attribute : "nextButtonLabel",type:"string",description : "Label for next page button pagination",default : "next"},
    {attribute : "length",type:"number",description : "Length of data to be paged in pagination",default : "10"},
    {attribute : "showFirstLastOption",type:"boolean",description : "Toggle first and last page button in pagination",default : "true"},
    {attribute : "visibleRangeLength",type:"number",description : "Visible number of pages on UI",default : "5"},
    {attribute : "pageSizes",type:"number array",description : "Change page size dynamically from list in pagination",default : "[5,10,15,20,25]"},

  ];
}
