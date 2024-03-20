import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressTabComponent } from './address-tab/address-tab.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { CaseListComponent } from './case-list/case-list.component';
import { ContactMethodTabComponent } from './contact-method-tab/contact-method-tab.component';

const routes: Routes = [
  
  {path: 'adress',component: AddressTabComponent},
  {path: 'casedetails',component: CaseDetailsComponent},
  {path: '',component: CaseListComponent},
  {path: 'contactmethod',component: ContactMethodTabComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
