import { Component } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent {
  open : boolean = false;
  toggleCollapse(){
    this.open = !this.open;
  }
}
