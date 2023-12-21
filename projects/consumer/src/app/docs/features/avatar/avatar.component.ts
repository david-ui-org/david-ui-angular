import { Component } from '@angular/core';
import { Property } from '../../../shared/model/property.model';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
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
  avatarCode: string = ` <dui-avatar src="../assets/avatar.jpeg"></dui-avatar>`;
  avatarSizes: string = `
  <dui-avatar src="../assets/avatar.jpeg" size="xs"></dui-avatar>
  <dui-avatar src="../assets/avatar.jpeg" size="sm"></dui-avatar>
  <dui-avatar src="../assets/avatar.jpeg" size="md"></dui-avatar>
  <dui-avatar src="../assets/avatar.jpeg" size="lg"></dui-avatar>
  <dui-avatar src="../assets/avatar.jpeg" size="xl"></dui-avatar>
  <dui-avatar src="../assets/avatar.jpeg" size="xxl"></dui-avatar>`;

  avatarVariant: string = ` <div class="flex gap-3">
  <dui-avatar src="../assets/avatar.jpeg" variant="circle"></dui-avatar>
  <dui-avatar src="../assets/avatar.jpeg" variant="rounded"></dui-avatar>
  <dui-avatar src="../assets/avatar.jpeg" variant="square"></dui-avatar>
  </div>`;

  avatarBorder: string = ` <div class="flex gap-3">
  <dui-avatar src="../assets/avatar.jpeg" className="p-0.5" [addBorder]="true" color="green" variant="circle"></dui-avatar>
  <dui-avatar src="../assets/avatar.jpeg" className="p-0.5" [addBorder]="true" color="red" variant="rounded"></dui-avatar>
  <dui-avatar src="../assets/avatar.jpeg" className="p-0.5" [addBorder]="true" color="purple" variant="square"></dui-avatar>
  </div>`;

  avatarStack: string = ` 
  <div class="flex items-center -space-x-4">
    <dui-avatar
      variant="circle"
      alt="user 1"
      className="border-2 border-white hover:z-10 focus:z-10"
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
    />
    <dui-avatar
      variant="circle"
      alt="user 2"
      className="border-2 border-white hover:z-10 focus:z-10"
      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
    />
    <dui-avatar
      variant="circle"
      alt="user 3"
      className="border-2 border-white hover:z-10 focus:z-10"
      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
    />
    <dui-avatar
      variant="circle"
      alt="user 4"
      className="border-2 border-white hover:z-10 focus:z-10"
      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    />
    <dui-avatar
      variant="circle"
      alt="user 5"
      className="border-2 border-white hover:z-10 focus:z-10"
      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
    />
  </div>
  `;

  avatarText: string = `
  <div class="flex flex-col gap-6">
    <div class="flex items-center gap-4">
      <dui-avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
      />
      <div>
        <dui-typography variant="h6">Tania Andrew</dui-typography>
        <dui-typography
          variant="small"
          color="gray"
          className="font-normal"
        >
          Web Developer
        </dui-typography>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <dui-avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        variant="rounded"
      />
      <div>
        <dui-typography variant="h6">Tania Andrew</dui-typography>
        <dui-typography
          variant="small"
          color="gray"
          className="font-normal"
        >
          Web Developer
        </dui-typography>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <dui-avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        variant="square"
      />
      <div>
        <dui-typography variant="h6">Tania Andrew</dui-typography>
        <dui-typography
          variant="small"
          color="gray"
          className="font-normal"
        >
          Web Developer
        </dui-typography>
      </div>
    </div>
  </div>
  `;

  avatarTypeVariant: string = ` 
  type variant = 'rounded' | 'circle' | 'square';`;
  avatarTypeSize: string = ` 
  type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';`;
  avatarTypeColor: string = 
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

  avatarProperties: Property[] = [
    {attribute : "variant",type:"Variant",description : "change avatar variant",default : "filled"},
    {attribute : "color",type:"Color",description : "change avatar color",default : "gray"},
    {attribute : "className",type:"string",description : "Add custom className for avatar",default : "''"},
    {attribute : "size",type:"boolean",description : "Change avatar size",default : "md"},
    {attribute : "addBorder",type:"boolean",description : "add 2px border",default : "false"},

  ];
}
