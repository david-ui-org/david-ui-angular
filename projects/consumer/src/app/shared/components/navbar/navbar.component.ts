import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
openNav = false;
constructor(readonly sharedService : SharedService, readonly router : Router){

}



}
