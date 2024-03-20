import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { AddressTabComponent } from './address-tab/address-tab.component';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactMethodComponent } from './contact-method-tab/contact-method-tab.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    PersonListComponent,
    PersonDetailsComponent,

    // AddressTabComponent,
    // ContactMethodComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    NgbNavModule,
    NgbModule
  ],
  exports: [
    PersonListComponent,
    PersonDetailsComponent,
    // ContactMethodComponent, 
  ]
})
export class PeopleModule { }
