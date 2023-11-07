import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  importCode: string = ` import { DUIAvatar } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIAvatar],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
avatarCode: string=`<dui-avatar src="../assets/avatar.jpeg"></dui-avatar>`;
avatarSizes: string=`
<dui-avatar src="../assets/avatar.jpeg" size="xs"></dui-avatar>
<dui-avatar src="../assets/avatar.jpeg" size="sm"></dui-avatar>
<dui-avatar src="../assets/avatar.jpeg" size="md"></dui-avatar>
<dui-avatar src="../assets/avatar.jpeg" size="lg"></dui-avatar>
<dui-avatar src="../assets/avatar.jpeg" size="xl"></dui-avatar>
<dui-avatar src="../assets/avatar.jpeg" size="xxl"></dui-avatar>`;
}
