import { Component, OnInit } from '@angular/core';
import { SidebarItem, SidebarData } from '../../shared/model/sidebar-item.model';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {
  sidebarItems =  SidebarData;
  constructor(readonly sharedService : SharedService){
    
  }


}
