import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceComponent } from './modules/workspace/workspace/workspace.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { ContactMethodComponent } from './modules/people/contact-method-tab/contact-method-tab.component';
import { AddressTabComponent } from './modules/people/address-tab/address-tab.component';

const routes: Routes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },

      {
        path: 'cases',
        loadChildren: () =>
          import('./modules/cases/cases.module').then((m) => m.CasesModule),
      },
      {
        path: 'people',
        loadChildren: () =>
          import('./modules/people/people.module').then((m) => m.PeopleModule),
      },
      
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
