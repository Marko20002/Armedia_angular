import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { CaseListComponent } from './case-list/case-list.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { AddressTabComponent } from './address-tab/address-tab.component';
import { ContactMethodTabComponent } from './contact-method-tab/contact-method-tab.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CaseListComponent,
    CaseDetailsComponent,
    AddressTabComponent,
    ContactMethodTabComponent
  ],
  imports: [
    CommonModule,
    CasesRoutingModule,
    NgbNavModule
  ]
})
export class CasesModule { }
