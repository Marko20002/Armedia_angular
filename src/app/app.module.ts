import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactMethodComponent } from './modules/people/contact-method-tab/contact-method-tab.component';
import { AddressTabComponent } from './modules/people/address-tab/address-tab.component';
import { RouterModule } from '@angular/router';
import { PersonCreateComponent } from './modules/people/person-create/person-create.component';
import { WorkspaceComponent } from './modules/workspace/workspace/workspace.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactMethodComponent,
    AddressTabComponent,
    PersonCreateComponent,
    WorkspaceComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot([]), 
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
