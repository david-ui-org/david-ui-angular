import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'David UI Angular - Tailwind CSS Library for Angular',
      meta: [
        {
          name: 'description',
          content: 'This is an example Description Meta tag!'
        }
      ],

    }

  },
  {
    path: '',
    component: DocsComponent,
    children: [
      {
        path: 'docs',
        loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule)
      }

    ]
  },
  {
    path:'**',
    redirectTo:'/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
    
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
